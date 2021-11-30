/* eslint-disable */

import React, { useState, useContext, useEffect, useCallback } from 'react';
import useTransfer from '../../hooks/useTransfer';
import { appStore } from '../../state/app';

const initialState = {
  nft: undefined,
  account: '',
};
const Modal = () => {
  const { update, state } = useContext(appStore);
  const { account, app } = state;

  const { nftTransfer } = useTransfer();

  const [data, setData] = useState(initialState);
  const [correctNft, setCorrectNft] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      update('app.modalOpen', false);
    }
  }, []);

  const handleChange = ({ target }) => {
    let { value } = target;

    if (target.name === 'account') {
      value = target.value.trim().toLowerCase();
    }
    setData((x) => ({ ...x, [target.name]: value }));
  };

  const handleModalClose = () => update('app.modalOpen', false);

  const handleClick = () => {
    const nft = Number(data.nft);

    if (!correctNft) {
      // you can send only that NFTs that you have.
      // you can't send empty data
      if (
        data.nft === null ||
        data.nft === undefined ||
        Number.isNaN(data.nft) ||
        data.nft === '' ||
        data.nft > 1923 ||
        !app.misfitsArray.some((item) => item.token_id == nft)
      )
        return;
      setCorrectNft(true);
    } else {
      // can't send to itself
      // account name must contain ".near"
      if (data.account === account.accountId || !data.account.includes('.near'))
        return;

      nftTransfer(nft, data.account);
    }
  };

  return (
    <div className="modal">
      <div className="modal__box">
        {!correctNft ? (
          <>
            <div className="modal__nft-id">
              NFT <span className="modal__nft-id-white">ID</span>
            </div>
            <input
              type="number"
              name="nft"
              onChange={handleChange}
              value={data.nft}
              className="modal__input"
              placeholder="Enter number of nft"
            />
          </>
        ) : (
          <>
            <div className="modal__nft-id">
              Account <span className="modal__nft-id-white">name</span>
            </div>
            <input
              name="account"
              onChange={handleChange}
              value={data.account}
              className="modal__input"
              placeholder="Enter account name recipient"
            />
          </>
        )}

        <div className="modal__controls">
          <button
            className="modal__close-btn"
            type="button"
            onClick={handleModalClose}
          >
            Cancel
          </button>
          <button
            className="modal__send-btn"
            type="button"
            onClick={handleClick}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
