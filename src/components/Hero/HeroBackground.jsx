import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SvgEllipse } from '../../assets/images/hero-ellipse.svg';
import { ReactComponent as SvgCloud1 } from '../../assets/images/hero-cloud1.svg';
import { ReactComponent as SvgCloud2 } from '../../assets/images/hero-cloud2.svg';
import { ReactComponent as SvgCloud3 } from '../../assets/images/hero-cloud3.svg';

const HeroBackground = ({ className }) => (
  <div className={className}>
    <SvgEllipse className="hero__background-ellipse" />
    <SvgCloud1 className="hero__background-cloud1" />
    <SvgCloud2 className="hero__background-cloud2" />
    <SvgCloud3 className="hero__background-cloud3" />
  </div>
);

HeroBackground.propTypes = {
  className: PropTypes.string,
};

HeroBackground.defaultProps = {
  className: '',
};

export default HeroBackground;
