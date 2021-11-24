/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';
import NftItemInfo from '../NftItemInfo';
import Normies from '../../assets/images/rarity-common.svg';
import Skellies from '../../assets/images/rarity-rare.svg';
import Zombies from '../../assets/images/rarity-uncommon.svg';
import Meerkats from '../../assets/images/rarity-very-rare.svg';
import Glitches from '../../assets/images/rarity-super-rare.svg';
import Reveal from '../../pages/MyNFTS/Reveal';

const rarity = {
  Normies,
  Skellies,
  Zombies,
  Meerkats,
  Glitches,
};

const NftItem = ({ item, onClick, isReveal, urlIpfs }) => {
  const [reveal, setReveal] = useState(isReveal);
  const [info, setInfo] = useState({});

  useEffect(async () => {
    try {
      const response = await fetch(`${urlIpfs}/${item.reference}`);
      const data = await response.json();

      setInfo(data);
    } catch (e) {
      // eslint-disable-next-line
      console.log(e);
    }
  }, []);

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
            <ReactSVG src={rarity[info?.kind] || Normies} />
          </div>

          <NftItemInfo
            className="nft-item__info"
            item={item}
            urlIpfs={urlIpfs}
            info={info}
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
