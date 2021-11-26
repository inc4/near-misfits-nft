/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BuyMoreBtn from '../BuyMoreBtn';
import BuyMore from './BuyMore';
import GenerateSoldOut from '../Generate/GenerateSoldOut';
import useTransfer from '../../hooks/useTransfer';
import Modal from '../Modal';

const Buy = ({ soldOut }) => {
  const linkDrop = true;
  const { nftTransfer } = useTransfer();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = '';
  };

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
              onClick={openModal}
            />
            {modal && <Modal closeModal={closeModal} />}
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
