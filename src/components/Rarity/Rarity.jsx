import React from 'react';
import { ReactSVG } from 'react-svg';
import RateList from '../RateList';
import rarityData from './rarityData';
import gradient from '../../assets/images/rarity-background-gradient.svg';
import RarityList from './RarityList';

const Rarity = () => (
  <section id="rarity" className="rarity">
    <div className="rarity__header">
      <h1 className="rarity__title">Types of Misfits (Rarity)</h1>
      <RateList rates={rarityData.rates} />
      <ReactSVG className="rarity__header-background" src={gradient} />
    </div>
    <div className="rarity__content-wrapper">
      <div className="rarity__content">
        <div className="rarity__information">
          <p className="rarity__text">
            All Misfits are equal, but some are more equal than others!
          </p>
          <p className="rarity__text">
            Amongst the 1923 Misfits there are 1600 Normies, 150 Zombies, 101
            Skeletons (‘Skellies’), 50 Nearkats and the most rare of them all -
            22 Glitched!
          </p>
          <p className="rarity__text">
            Each one of these cohorts have a unique story, which we will unveil
            soon…
          </p>
        </div>

        <RarityList list={rarityData.misfits} />
      </div>
    </div>
  </section>
);

export default Rarity;
