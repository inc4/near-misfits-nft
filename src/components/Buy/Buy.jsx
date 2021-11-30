import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { appStore } from '../../state/app';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from './BuyMore';
import GenerateSoldOut from '../Generate/GenerateSoldOut';

const Buy = ({ soldOut }) => {
  const linkDrop = true;

  const { update } = useContext(appStore);

  const modalOpen = () => update('app.modalOpen', true);

  return (
    <div className="buy">
      <div className="buy__data">
        {!soldOut ? (
          <>
            <BuyMore />
            <BuyMore isLinkDrop={linkDrop} />
            <BuyMoreBtn
              text="Send an NFT"
              className="buy__nft"
              onClick={modalOpen}
            />
          </>
        ) : (
          <div className="buy__sold-out-wrapper">
            <picture>
              <source srcSet="./images/generate-background-2x.webp 2x, ./images/generate-background.webp 1x" />
              <img
                className="buy__image"
                src="./images/generate-background.png"
                alt="sold out background"
              />
            </picture>
            <GenerateSoldOut className="buy__sold-out" />
          </div>
        )}
      </div>
    </div>
  );
};

Buy.propTypes = {
  soldOut: PropTypes.bool,
};

Buy.defaultProps = {
  soldOut: false,
};

export default Buy;
