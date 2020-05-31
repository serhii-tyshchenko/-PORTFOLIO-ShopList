import React from 'react';
import { UISelect } from 'modules/ui';

import './LanguageSelect.scss';

const LanguageSelect = ({ language, onChange, options }) => (
  <UISelect
    value={language}
    onChange={onChange}
    options={options}
    extraClassName="language-selector"
  />
);

export { LanguageSelect };
