import React, { createContext } from 'react';
import { useSelector } from 'react-redux';

import { getLocalization } from 'assets/localization';

const Localization = createContext();
Localization.displayName = 'Localization';

const LocalizationProvider = (props) => {
  const { language } = useSelector((state) => state.settings);
  return (
    <Localization.Provider value={getLocalization(language)}>
      {props.children}
    </Localization.Provider>
  );
};

export { Localization, LocalizationProvider };
