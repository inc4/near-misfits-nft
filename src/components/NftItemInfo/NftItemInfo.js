import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import rarity from '../../assets/images/rarity-common.svg';

const NftItemInfo = ({ className, item, urlIpfs, info }) => {
  const nftInfo = useRef();

  useEffect(() => {
    const { right } = nftInfo?.current?.getBoundingClientRect();

    if (right > window.innerWidth) {
      const width = window.innerWidth;
      nftInfo.current.style.transform = `translateX(-${right - width + 50}px)`;
    }
  });

  return (
    <div ref={nftInfo} className={`nft-item-info  ${className || ''}`}>
      <div className="nft-item-info__icon-wrapper">
        <div className="nft-item-info__image-wrapper">
          <img
            className="nft-item-info__image"
            src={`${urlIpfs}/${item.media}`}
            alt="misfit"
          />
        </div>
        <p className="nft-item-info__number">
          # {item?.title?.padStart(5, '0')}
        </p>
        <ReactSVG
          className="nft-item-info__rarity"
          src={item.rarity || rarity}
        />
      </div>
      <div className="nft-item-info__stats">
        <p>kind : {info?.kind || 'no data'}</p>
        <p>seed : {info?.seed || 'no data'}</p>
      </div>
    </div>
  );
};

NftItemInfo.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  urlIpfs: PropTypes.string,
  info: PropTypes.object,
};
export default NftItemInfo;
