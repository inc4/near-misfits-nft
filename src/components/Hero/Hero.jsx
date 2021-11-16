import React from 'react';
import CalendarBtn from './CalendarBtn';
import HeroBackground from './HeroBackground';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      <HeroBackground className="hero__background" />

      <div className="hero__information">
        <h1 className="hero__title">
          The First Fleet of the <br />
          <span className="hero__title_purpure">Metaverse</span>
        </h1>
        <p className="hero__text">
          Join an Exclusive Community of NEAR early adopters and BUIDLers.
        </p>
        <p className="hero__text">Misfits Dropping Soon</p>
        <CalendarBtn className="hero__calendar-btn" />
        <picture>
          <source srcSet="./images/misfits-big-2x.webp 2x, ./images/misfits-big.webp 1x" />
          <img
            className="hero__image"
            src="./images/misfits-big.png"
            alt="hello super"
          />
        </picture>
      </div>
    </div>
  </div>
);

export default Hero;
