import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const CalendarBtn = ({ className }) => (
  <a
    href="/#generate"
    title="Add to Calendar"
    className={`calendar-btn  ${className}`}
  >
    <FormattedMessage id="hero.mintButton" defaultMessage="Mint your first!" />
  </a>
);

CalendarBtn.defaultProps = {
  className: '',
};

CalendarBtn.propTypes = {
  className: PropTypes.string,
};

export default CalendarBtn;
