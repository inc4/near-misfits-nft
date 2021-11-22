/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { ReactSVG } from 'react-svg';
import useCopyToClipboard from '../../../hooks/useCopyToClipboard';
import copyIcon from '../../../assets/images/copy-icon.svg';

const ShareableLink = ({ link }) => {
  const { handleCopy } = useCopyToClipboard();
  const [animation, setAnimation] = useState('');

  return (
    <button
      className="shareable-link"
      type="button"
      onClick={() => {
        handleCopy(link);
        setTimeout(() => setAnimation('shareable-link__animation'), 0);
        setTimeout(() => setAnimation(''), 1000);
      }}
    >
      <p className="shareable-link__text">{link} </p>
      <ReactSVG className="shareable-link__icon" src={copyIcon} />
      <p className={`shareable-link__copied ${animation}`}>
        <FormattedMessage id="linkDrop.copyText" defaultMessage="copied" />
      </p>
    </button>
  );
};

ShareableLink.propTypes = {
  link: PropTypes.string,
};

ShareableLink.defaultProps = {
  link: 'https://genc.win',
};

export default ShareableLink;
