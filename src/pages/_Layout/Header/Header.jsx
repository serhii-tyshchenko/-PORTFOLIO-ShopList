import React from 'react';
import { AuthBtn } from 'modules/user';
import { ThemeToggler } from 'modules/settings';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content wrapper">
      <a href="/" className="header__logo">
        Logo
      </a>
      <div className="header__menu">
        <ThemeToggler />
        <AuthBtn />
      </div>
    </div>
  </header>
);

export { Header };
