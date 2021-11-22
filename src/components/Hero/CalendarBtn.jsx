import React from 'react';
import PropTypes from 'prop-types';

const CalendarBtn = ({ className }) => (
  <a
    href="/#generate"
    title="Add to Calendar"
    className={`calendar-btn  ${className}`}
  >
    Mint your first!
  </a>
);

CalendarBtn.defaultProps = {
  className: '',
};

CalendarBtn.propTypes = {
  className: PropTypes.string,
};

export default CalendarBtn;
