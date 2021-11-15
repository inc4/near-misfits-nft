import React from 'react';
import PropTypes from 'prop-types';

const GenerateSoldOut = ({ className }) => (
  <div className={`generate-sold-out ${className || ''}`}>
    <p className="generate-sold-out__text">Sold Out</p>
    <a
      className="generate-sold-out__link"
      href="https://www.mintbase.io/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p>Buy on Mintbase</p>
      <picture>
        <source srcSet="./images/generate-mintbase-2x.png 2x, ./images/generate-mintbase.png 1x" />
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
