/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import NftItemInfo from '../NftItemInfo';
import rarity from '../../assets/images/rarity-common.svg';
import Reveal from '../../pages/MyNFTS/Reveal';

const NftItem = ({ item, onClick, isReveal, urlIpfs }) => {
  const [reveal, setReveal] = useState(isReveal);

  const handleClick = () => {
    setReveal(true);
    onClick({ [item.title]: true });
  };

  return (
    <div className="nft-item">
      {reveal ? (
        <div>
          <img
            className="nft-item__img"
            src={`${urlIpfs}/${item.media}`}
            alt="misfit"
          />

          <div className="nft-item__footer">
            <p className="nft-item__hash"># {item?.title?.padStart(5, '0')}</p>
            <ReactSVG src={item.rarity || rarity} />
          </div>

          <NftItemInfo
            className="nft-item__info"
            item={item}
            urlIpfs={urlIpfs}
          />
        </div>
      ) : (
        <Reveal title={item?.title} handleClick={handleClick} />
      )}
    </div>
  );
};

NftItem.propTypes = {
  item: PropTypes.object,
  onClick: PropTypes.func,
  isReveal: PropTypes.bool,
  urlIpfs: PropTypes.string,
};

NftItem.defaultProps = {
  item: {},
  onClick: () => {},
};

export default NftItem;
