import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const ConnectWalletBtn = ({ handleClick, text }) => (
  <button className="connect-wallet" type="button" onClick={handleClick}>
    {text ? (
      <p className="connect-wallet__text connect-wallet__text-name">
        {text}
        <span className="connect-wallet__log-out">
          <FormattedMessage
            id="navigation.connectWalletLogOut"
            defaultMessage="Log Out"
          />
        </span>
      </p>
    ) : (
      <p className="connect-wallet__text">
        <FormattedMessage
          id="navigation.connectWallet"
          defaultMessage="Connect Wallet"
        />
      </p>
    )}
  </button>
);

ConnectWalletBtn.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
};

export default ConnectWalletBtn;
