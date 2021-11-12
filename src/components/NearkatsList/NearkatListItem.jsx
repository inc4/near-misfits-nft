import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

const NearkatsListItem = ({ kat }) => (
  <li className="nearkats-item">
    <ReactSVG src={kat.svgMainIcon} />

    <div className="nearkats-item__header">
      <p>#0123456789 </p>
      <ReactSVG src={kat.svgRarityIcon} />
    </div>
  </li>
);

NearkatsListItem.propTypes = {
  kat: PropTypes.object,
};

export default NearkatsListItem;
