import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SaveBtn = ({ linkDropArray }) => {
  const [animation, setAnimation] = useState('');

  const handleClick = () => {
    setTimeout(() => setAnimation('save-btn__animation'), 0);
    setTimeout(() => setAnimation(''), 1000);
  };

  // create correct href for saving linkdrop into file
  const hrefSaveBtn = () => {
    let href = 'data:attachment/text,';

    const uri = linkDropArray
      .map(
        ({ link, text }, index) =>
          `${index}: ${text ? `${text} : ` : ''} \n${link}`,
      )
      .join('\n\n\n');
    href += encodeURI(uri);

    return href;
  };
  return (
    <a
      href={hrefSaveBtn()}
      className="save-btn"
      download="my-link-drops.txt"
      onClick={handleClick}
      target="_blank"
    >
      Save
      <p className={`save-btn__saved ${animation}`}>saved</p>
    </a>
  );
};

SaveBtn.propTypes = {
  linkDropArray: PropTypes.array,
};

SaveBtn.defaultProps = {
  linkDropArray: [],
};

export default SaveBtn;
