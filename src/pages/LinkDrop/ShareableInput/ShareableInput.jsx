import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ShareableInput = ({ text, onBlur, index }) => {
  const [value, setValue] = useState(text);

  const handleChange = (e) => setValue(e.target.value);

  return (
    <input
      className="shareable-input"
      data-index={index}
      onBlur={onBlur}
      onChange={handleChange}
      value={value}
      placeholder="Enter text"
    />
  );
};

ShareableInput.propTypes = {
  text: PropTypes.string,
  onBlur: PropTypes.func,
  index: PropTypes.number,
};

ShareableInput.defaultProps = {
  text: '',
  onBlur: () => {},
  index: undefined,
};

export default ShareableInput;
