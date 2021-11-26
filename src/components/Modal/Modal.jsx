/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useTransfer from '../../hooks/useTransfer';
import { appStore } from '../../state/app';

const initialState = {
  nft: undefined,
  account: '',
};
const Modal = ({ closeModal }) => {
  const { state } = useContext(appStore);
  const { account } = state;

  const { nftTransfer } = useTransfer();
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) => {
    let { value } = target;

    if (target.name === 'nft') {
      value = Math.abs(value);
    } else if (target.name === 'account') {
      value = target.value.trim().toLowerCase();
    }
    setData((x) => ({ ...x, [target.name]: value }));
  };

  const handleClick = () => {
    console.log('data', data);
    // can't send to itself
    if (data.account === account.accountId) return;

    // can't send empty data
    if (
      data.nft === null ||
      data.nft === undefined ||
      Number.isNaN(data.nft) ||
      !data.account
    )
      return;

    nftTransfer(data.nft, data.account);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal__box">
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

        <div className="modal__controls">
          <button
            className="modal__close-btn"
            type="button"
            onClick={closeModal}
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

Modal.propTypes = {
  closeModal: PropTypes.func,
};

export default Modal;
