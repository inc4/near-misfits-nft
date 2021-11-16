import React from 'react';
import PropTypes from 'prop-types';
import RarityItem from './RarityItem';

const RarityList = ({ list }) => (
  <ul className="rarity-list">
    {list.length &&
      list.map((item) => <RarityItem key={item.id} item={item} />)}
  </ul>
);

RarityList.propTypes = {
  list: PropTypes.array,
};

RarityList.defaultProps = {
  list: [],
};
export default RarityList;
