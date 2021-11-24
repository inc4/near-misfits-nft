/* eslint-disable */
import getConfig from '../config';
import * as nearAPI from 'near-api-js';
import { getWallet, getContract, getPrice } from '../utils/near-utils';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';

export const {
  networkId,
  nodeUrl,
  walletUrl,
  GAS,
  contractName,
  contractMethods,
} = getConfig();

export const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
  },
} = nearAPI;

const linkmatcher =
  /https:\/\/wallet.near.org\/linkdrop\/[^/]+\/(?<key>.+)\?redirectUrl=/;

function getPublicKey(link) {
  const m = link.match(linkmatcher).groups.key;
  return KeyPairEd25519.fromString(m).getPublicKey();
}

export const initNear =
  () =>
  async ({ update, getState }) => {
    try {
      const { near, wallet } = await getWallet();

      const price = await getPrice(near);

      wallet.signIn = (successUrl) => {
        wallet.requestSignIn({
          successUrl,
          contractId: contractName,
        });
      };

      const signOut = wallet.signOut;
      wallet.signOut = () => {
        signOut.call(wallet);
        update('wallet.signedIn', false);
        update('', { account: null });
        localStorage.removeItem('undefined_wallet_auth_key');
        wallet.signedIn = wallet.isSignedIn();
        new nearAPI.keyStores.BrowserLocalStorageKeyStore().clear();
      };

      wallet.signedIn = wallet.isSignedIn();

      let account;
      if (wallet.signedIn) {
        account = wallet.account();
        const contract = getContract(account, contractMethods);

        wallet.balance = formatNearAmount(
          (await wallet.account().getAccountBalance()).available,
          2,
        );

        await update('', { wallet, account, contract, price, near });

        // take lindDropArray from Local Storage for only that user that connect with near wallet
        let linkDropArray =
          JSON.parse(
            localStorage.getItem(`linkDropArray:${account.accountId}`),
          ) || [];

        // tokensLeft - count of how many tokens left
        // misfitsArray - NFTs of user
        // {base_uri: urlIpfs} take url for IPFS where NFTs and data stored
        // linkDropArray.map - check is somebody claim your link drop or not

        const [
          tokensLeft,
          nftTotalSupply,
          misfitsArray,
          { base_uri: urlIpfs },
        ] = await Promise.all([
          contract.tokens_left(),
          contract.nft_total_supply(),
          contract.nft_tokens_for_owner({
            account_id: account.accountId,
          }),
          contract.nft_metadata(),
          ...linkDropArray.map(async (link) => {
            const public_key = getPublicKey(link.link).toString();
            link.isUsed = !(await contract.check_key({ public_key }));
          }),
        ]);

        // if all tokens buy soldOut will be true
        const soldOut = tokensLeft === 0;

        // filter linkDrops that was used
        linkDropArray = linkDropArray.filter(({ isUsed }) => !isUsed);

        // update LocalStorage
        localStorage.setItem(
          `linkDropArray:${account.accountId}`,
          JSON.stringify([...linkDropArray]),
        );

        const state = getState();
        const app = {
          ...state.app,
          misfitsArray,
          urlIpfs,
          linkDropArray,
          soldOut,
          tokensLeft,
        };

        await update('', { app });

        // Debugging start
        console.log('tokens_left:', tokensLeft);
        console.log('nft_total_supply', nftTotalSupply);
        console.log('state:', getState());
        // Debugging end

        return;
      }

      await update('', { near, wallet, account, price });
      console.log('state:', getState());
    } catch (e) {
      console.log('error:', e);
    }
  };
