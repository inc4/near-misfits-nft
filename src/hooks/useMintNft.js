/* eslint-disable no-alert */
import { useContext } from 'react';
import { appStore } from '../state/app';

const useMintNft = () => {
  const { state } = useContext(appStore);
  const { contract, price } = state;

  const mintNft = async (count = 1) => {
    const callbackUrl = `${window.location.origin}/my-nfts`;
    if (count === 1) {
      contract.nft_mint_one({
        args: {},
        gas: '50000000000000',
        amount: price.oneTokenCost,
        callbackUrl,
      });
    } else {
      contract.nft_mint_many({
        args: { num: count },
        gas: '230000000000000',
        amount: price.tenTokenCost,
        callbackUrl,
      });
    }
  };

  return { mintNft };
};

export default useMintNft;
