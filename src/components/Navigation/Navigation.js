import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Navigation = ({ className, signedIn }) => (
  <nav className={`navigation ${className || ''}`}>
    <ul className="navigation__list">
      <li className="navigation__list-item">
        <Link to="/#learn" className="navigation__link">
          <FormattedMessage id="navigation.learn" defaultMessage="Learn" />
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#rarity" className="navigation__link">
          <FormattedMessage id="navigation.rarity" defaultMessage="Rarity" />
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#generate" className="navigation__link">
          <FormattedMessage
            id="navigation.generate"
            defaultMessage="Generate"
          />
        </Link>
      </li>
      <li className="navigation__list-item">
        <Link to="/#faq" className="navigation__link">
          <FormattedMessage id="navigation.faq" defaultMessage="FAQ" />
        </Link>
      </li>
      {signedIn && (
        <>
          <li className="navigation__list-item">
            <Link to="/my-nfts" className="navigation__link">
              <FormattedMessage
                id="navigation.myNfts"
                defaultMessage="My NFTs"
              />
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link to="/link-drop" className="navigation__link">
              LinkDrop
            </Link>
          </li>
        </>
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  className: PropTypes.string,
  signedIn: PropTypes.bool,
};

Navigation.defaultProps = {
  className: '',
  signedIn: false,
};

export default Navigation;
