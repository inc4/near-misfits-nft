import React from 'react';
import { ReactSVG } from 'react-svg';
import ellipse from '../../assets/images/leran-background-ellipse.svg';
import zombie1 from '../../assets/images/learn-zombie-1.svg';
import zombie2 from '../../assets/images/learn-zombie-2.svg';
import zombie3 from '../../assets/images/learn-zombie-3.svg';
import zombie4 from '../../assets/images/learn-zombie-4.svg';

const Learn = () => (
  <section id="learn" className="learn">
    <div className="learn__information">
      <h2 className="learn__title">
        Introducing <br /> NEAR Misfits (Gen 0)
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
      <ReactSVG className="learn__zombie-1" src={zombie1} />
      <ReactSVG className="learn__zombie-2" src={zombie2} />
      <ReactSVG className="learn__zombie-3" src={zombie3} />
      <ReactSVG className="learn__zombie-4" src={zombie4} />
      <ReactSVG className="learn__background-ellipse" src={ellipse} />
    </div>
  </section>
);

export default Learn;
