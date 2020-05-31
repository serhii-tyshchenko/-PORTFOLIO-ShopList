import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSettings } from 'store/actions';
import { ThemeButton } from 'modules/settings';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);
  const uid = useSelector((state) => state.user.uid);
  function handleThemeChange() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(updateSettings(uid, { theme: newTheme }));
  }
  return <ThemeButton theme={theme} onClick={handleThemeChange} />;
};

export { ThemeToggler };
