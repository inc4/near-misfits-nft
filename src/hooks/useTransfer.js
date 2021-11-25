/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { appStore } from '../state/app';

const useTransfer = () => {
  const history = useHistory();

  const { state } = useContext(appStore);

  const { contract, account } = state;

  const nftTransfer = async () => {
    /* eslint-disable-next-line */
    const tokenId = Number(prompt('NFT ID'));

    /* eslint-disable-next-line */
    const receiver_id = prompt('Account to send to').toLocaleLowerCase();
    if (
      tokenId === null ||
      tokenId === '' ||
      Number.isNaN(tokenId) ||
      receiver_id === '' ||
      receiver_id === null
    ) {
      return;
    }

    if (receiver_id === account.accountId) {
      alert(
        `You cann't send NFT to yourself.\nTry sending to another account.`,
      );
      return;
    }

    const token_id = tokenId.toString();

    await contract.nft_transfer({
      args: { receiver_id, token_id },
      amount: '1',
    });
    history.push('/my-nfts');
  };
  return { nftTransfer };
};

export default useTransfer;
