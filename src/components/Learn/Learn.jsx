import React from 'react';
import { ReactComponent as SvgEllipse } from '../../assets/images/leran-background-ellipse.svg';

const Learn = () => (
  <section id="learn" className="learn">
    <div className="learn__information">
      <h2 className="learn__title">
        Introducing <br /> NEAR Misfits (Gen&nbsp;0)
      </h2>
      <p className="learn__text">
        10,000 brave souls set out into the vast unknown to explore the
        Metaverse... Only 1,923 survived.
      </p>
      <p className="learn__text">
        These Misfits are part of a Decentralised Special Operations crew from
        all over the world and all walks of life. A group of humans rising to
        the challenge of their times, coming together to build the Metaverse:
        challenge the status quo, push the boundaries of what is possible, build
        and contribute to enabling technology.
      </p>
    </div>
    <div className="learn__picture">
      <picture>
        <source srcSet="./images/learn-zombie-2x.webp 2x, ./images/learn-zombie.webp 1x" />
        <img
          src="./images/learn-zombie.png"
          alt="zombie"
          className="learn__picture-image"
        />
      </picture>

      <SvgEllipse className="learn__background-ellipse" />
    </div>
  </section>
);

export default Learn;
