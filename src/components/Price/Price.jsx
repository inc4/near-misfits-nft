import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price, className }) => (
  <div className="price">
    <span className="price__near">Ⓝ&nbsp;</span>
    <span className={`price__count ${className}`}>{price}</span>
  </div>
);

Price.propTypes = {
  price: PropTypes.number,
  className: PropTypes.string,
};

export default Price;
