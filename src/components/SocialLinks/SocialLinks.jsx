import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import socialFace from '../../assets/images/social-face.svg';
import socialTwitter from '../../assets/images/social-twitter.svg';

const SocialLinks = ({ className }) => (
  <div className={`social-links ${className || ''}`}>
    <a href="https://www.mintbase.io" rel="noopener noreferrer" target="_blank">
      <picture>
        <source srcSet="./images/social-mintbase-2x.png 2x, ./images/social-mintbase.png 1x" />
        <img
          className="social-links__item"
          src="./images/social-mintbase.png"
          alt="mintbase"
        />
      </picture>
    </a>
    <a
      href="https://discord.com/invite/UY9Xf2k"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ReactSVG className="social-links__item" src={socialFace} />
    </a>
    <a
      href="https://twitter.com/NEARProtocol"
      rel="noopener noreferrer"
      target="_blank"
    >
      <ReactSVG className="social-links__item" src={socialTwitter} />
    </a>
  </div>
);

SocialLinks.propTypes = {
  className: PropTypes.string,
};

SocialLinks.defaultProps = {
  className: '',
};

export default SocialLinks;
