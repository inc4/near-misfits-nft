/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import Internationalize from '../Internationalize';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!hash) return;

    setTimeout(() => {
      const elem = document.querySelector(hash);

      elem?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);

    if (hash !== '#generate-block') history.push(pathname);
  }, [hash]);

  return (
    <Internationalize>
      <Header />
      {children}
      <Footer />
    </Internationalize>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
