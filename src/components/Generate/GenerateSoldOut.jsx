import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { appStore } from '../../state/app';
import useTransfer from '../../hooks/useTransfer';
import BuyMoreBtn from '../BuyMoreBtn';

const GenerateSoldOut = ({ className }) => {
  const { state } = useContext(appStore);
  const { account, app } = state;

  const { nftTransfer } = useTransfer();

  const haveNft = app.misfitsArray.length;
  const showSendNft = Boolean(account && haveNft);

  return (
    <div className={`generate-sold-out ${className || ''}`}>
      <p className="generate-sold-out__text">Sold Out</p>
      <a
        className="generate-sold-out__link"
        href="https://paras.id/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Buy on Paras</p>
        <picture>
          <source srcSet="./images/generate-paras-2x.webp 2x, ./images/generate-paras.webp 1x" />
          <img
            src="./images/generate-paras.png"
            alt="paras marketplace icon"
            className="generate-sold-out__img"
          ></img>
        </picture>
      </a>
      {showSendNft && (
        <BuyMoreBtn
          text="Send an NFT"
          className="buy__nft"
          onClick={nftTransfer}
        />
      )}
    </div>
  );
};
GenerateSoldOut.propTypes = {
  className: PropTypes.string,
};

GenerateSoldOut.defaultProps = {
  className: '',
};

export default GenerateSoldOut;
