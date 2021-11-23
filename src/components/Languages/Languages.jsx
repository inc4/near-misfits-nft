import React, { useContext, useState } from 'react';
import { appStore } from '../../state/app';

const Languages = () => {
  const { update, state } = useContext(appStore);
  const [value, setValue] = useState(state.app.locale);

  const handleChange = (e) => {
    const locale = e.target.value;
    setValue(locale);
    update('app.locale', locale);
    localStorage.setItem('locale', locale);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="en-US">English</option>
      <option value="ru-RU">Русский</option>
    </select>
  );
};

export default Languages;
