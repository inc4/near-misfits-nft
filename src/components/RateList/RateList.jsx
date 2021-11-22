import React from 'react';
import { ReactSVG } from 'react-svg';
import { FormattedMessage } from 'react-intl';
import normies from '../../assets/images/rarity-common.svg';
import zombies from '../../assets/images/rarity-uncommon.svg';
import skeletons from '../../assets/images/rarity-rare.svg';
import nearkats from '../../assets/images/rarity-very-rare.svg';
import glitch from '../../assets/images/rarity-super-rare.svg';

const RateList = () => (
  <div className="rate-list">
    <div className="rate-item">
      <div className="rate-item__count">1,600</div>
      <ReactSVG className="rate-item__icon" src={normies} />
      <p className="rate-item__text">
        <FormattedMessage
          id="rarity.rateListNormies"
          defaultMessage="Normies"
        />
      </p>
    </div>
    <div className="rate-item">
      <div className="rate-item__count">150</div>
      <ReactSVG className="rate-item__icon" src={zombies} />
      <p className="rate-item__text">
        <FormattedMessage
          id="rarity.rateListZombies"
          defaultMessage="Zombies"
        />
      </p>
    </div>
    <div className="rate-item">
      <div className="rate-item__count">101</div>
      <ReactSVG className="rate-item__icon" src={skeletons} />
      <p className="rate-item__text">
        <FormattedMessage
          id="rarity.rateListSkeletons"
          defaultMessage="Skeletons"
        />
      </p>
    </div>
    <div className="rate-item">
      <div className="rate-item__count">50</div>
      <ReactSVG className="rate-item__icon" src={nearkats} />
      <p className="rate-item__text">
        <FormattedMessage
          id="rarity.rateListNearkats"
          defaultMessage="Nearkats"
        />
      </p>
    </div>
    <div className="rate-item">
      <div className="rate-item__count">22</div>
      <ReactSVG className="rate-item__icon" src={glitch} />
      <p className="rate-item__text">
        <FormattedMessage id="rarity.rateListGlitch" defaultMessage="Glitch" />
      </p>
    </div>
  </div>
);

export default RateList;
