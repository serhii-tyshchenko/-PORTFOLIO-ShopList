import React from 'react';
import { UIIconButton } from 'modules/ui';

import './ThemeButton.scss';

const ThemeButton = (props) => {
  const { theme, onClick } = props;
  const btnIcon = theme === 'light' ? 'sun' : 'moon';
  return <UIIconButton icon={btnIcon} onClick={onClick} />;
};

export { ThemeButton };
