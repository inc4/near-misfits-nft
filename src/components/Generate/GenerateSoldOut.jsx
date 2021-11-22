import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const GenerateSoldOut = ({ className }) => (
  <div className={`generate-sold-out ${className || ''}`}>
    <p className="generate-sold-out__text">
      <FormattedMessage id="generate.soldOut" defaultMessage="Sold Out" />
    </p>
    <a
      className="generate-sold-out__link"
      href="https://www.mintbase.io/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>
        <FormattedMessage
          id="generate.generateButtonSoldOut"
          defaultMessage="Buy on Mintbase"
        />
      </p>
      <picture>
        <source srcSet="./images/generate-mintbase-2x.webp 2x, ./images/generate-mintbase.webp 1x" />
        <img
          src="./images/generate-mintbase.png"
          alt="mintbase marketplace icon"
          className="generate-sold-out__img"
        ></img>
      </picture>
    </a>
  </div>
);

GenerateSoldOut.propTypes = {
  className: PropTypes.string,
};

GenerateSoldOut.defaultProps = {
  className: '',
};

export default GenerateSoldOut;
