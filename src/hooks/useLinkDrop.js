/* eslint-disable no-console */
import { useContext } from 'react';
import { generate as id } from 'shortid';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';
import { GAS } from '../state/near';
import { appStore } from '../state/app';

const useLinkDrop = () => {
  const { state } = useContext(appStore);
  const { contract, account, app, price } = state;

  const walletUrl = (contractId, key, url) =>
    `https://wallet.near.org/linkdrop/${contractId}/${key}?redirectUrl=${url}/my-nfts`;

  const createLinkDrop = async () => {
    const keyPair = KeyPairEd25519.fromRandom();
    const currentUrl = window.location.origin;
    const url = walletUrl(
      contract.contractId,
      keyPair.secretKey.toString(),
      currentUrl,
    );

    const { linkDropArray } = app;

    localStorage.setItem(
      `linkDropArray:${account.accountId}`,
      JSON.stringify([
        ...linkDropArray,
        {
          link: url,
          text: '',
          id: id(),
          isUsed: false,
        },
      ]),
    );

    const cost = price.costLinkDrop;

    const publicKey = keyPair.getPublicKey().toString();

    try {
      await contract.create_linkdrop({
        args: { public_key: publicKey },
        gas: GAS,
        amount: cost,
        callbackUrl: `${currentUrl}/link-drop`,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return { createLinkDrop };
};

export default useLinkDrop;
