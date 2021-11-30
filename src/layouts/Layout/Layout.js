import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router';
import { appStore } from '../../state/app';
import Modal from '../Modal';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();
  const history = useHistory();

  const { state } = useContext(appStore);
  const { modalOpen } = state.app;

  useEffect(() => {
    if (!hash) return;

    setTimeout(() => {
      const elem = document.querySelector(hash);

      elem.scrollIntoView({
        behavior: 'smooth',
      });
    }, 100);

    if (hash !== '#generate-block') history.push(pathname);
  }, [hash]);

  // hide scroll when modal open
  if (modalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      {modalOpen && <Modal />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
