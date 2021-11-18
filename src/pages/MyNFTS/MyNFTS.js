import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ReactSVG } from 'react-svg';
import NftList from '../../components/NftList/NftList';
import NoNfts from '../../components/NoNfts/NoNfts';
import { appStore } from '../../state/app';
import Buy from '../../components/Buy';
import backgroundNft from '../../assets/images/nft-background.svg';

const MyNFTS = () => {
  const history = useHistory();

  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const nftsCount = state.app.misfitsArray.length;

  useEffect(() => {
    if (!localStorage.undefined_wallet_auth_key) {
      history.push('/');
    }
  });

  return nftsCount ? (
    <div className="my-nfts">
      <ReactSVG className="my-nfts__background" src={backgroundNft} />
      <div className="my-nfts__data">
        <NftList />
      </div>
      <Buy soldOut={soldOut} />
    </div>
  ) : (
    <NoNfts soldOut={soldOut} />
  );
};

export default MyNFTS;
