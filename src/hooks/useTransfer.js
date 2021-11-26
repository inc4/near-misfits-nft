/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { appStore } from '../state/app';

const useTransfer = () => {
  const history = useHistory();

  const { state } = useContext(appStore);

  const { contract } = state;

  const nftTransfer = async (tokenId, receiver_id) => {
    const token_id = tokenId.toString();
    console.log('transfer');

    await contract.nft_transfer({
      args: { receiver_id, token_id },
      amount: '1',
    });
    history.push('/my-nfts');
  };
  return { nftTransfer };
};

export default useTransfer;
