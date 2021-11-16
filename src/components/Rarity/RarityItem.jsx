import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const RarityItem = ({ item }) => (
  <li className="rarity-item">
    <ReactSVG src={item.svgMainIcon} />

    <div className="nearkats-item__header">
      <p>#0123456789 </p>
      <ReactSVG src={item.svgRarityIcon} />
    </div>
  </li>
);

RarityItem.propTypes = {
  item: PropTypes.object,
};

export default RarityItem;
