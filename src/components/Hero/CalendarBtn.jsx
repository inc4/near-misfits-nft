import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const CalendarBtn = ({ className }) => {
  const history = useHistory();

  return (
    <button
      type="button"
      title="Add to Calendar"
      className={`calendar-btn  ${className}`}
      onClick={() => history.push('/#generate')}
    >
      <FormattedMessage
        id="hero.mintButton"
        defaultMessage="Mint your first!"
      />
    </button>
  );
};

CalendarBtn.defaultProps = {
  className: '',
};

CalendarBtn.propTypes = {
  className: PropTypes.string,
};

export default CalendarBtn;
