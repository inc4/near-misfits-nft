import React from 'react';
import PropTypes from 'prop-types';
import BuyMoreBtn from '../BuyMoreBtn';
import useTransfer from '../../hooks/useTransfer';

const GenerateSoldOut = ({ className }) => {
  const { nftTransfer } = useTransfer();

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
      <BuyMoreBtn
        text="Send an NFT"
        className="buy__nft"
        onClick={nftTransfer}
      />
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
