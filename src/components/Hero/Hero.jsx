import React from 'react';
import { ReactSVG } from 'react-svg';
import CalendarBtn from './CalendarBtn';
import bgEllipse from '../../assets/images/hero-ellipse.svg';
import bgCloud1 from '../../assets/images/hero-cloud1.svg';
import bgCloud2 from '../../assets/images/hero-cloud2.svg';
import bgCloud3 from '../../assets/images/hero-cloud3.svg';

const Hero = () => (
  <div className="hero">
    <div className="hero__container">
      <div className="hero__background">
        <ReactSVG className="hero__background-ellipse" src={bgEllipse} />
        <ReactSVG className="hero__background-cloud1" src={bgCloud1} />
        <ReactSVG className="hero__background-cloud2" src={bgCloud2} />
        <ReactSVG className="hero__background-cloud3" src={bgCloud3} />
      </div>
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
          <source srcSet="./images/misfits-big-2x.png 2x, ./images/misfits-big.png 1x" />
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
