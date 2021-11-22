import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { appStore } from '../../state/app';
import English from '../../languages/en.json';
import Russian from '../../languages/ru.json';

const Internationalize = ({ children }) => {
  const { state } = useContext(appStore);

  let messages;
  if (state.app.locale === 'en-US') {
    messages = English;
  } else if (state.app.locale === 'ru-RU') {
    messages = Russian;
  }
  return (
    <IntlProvider locale={state.app.locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};
Internationalize.propTypes = {
  children: PropTypes.node,
};

export default Internationalize;
