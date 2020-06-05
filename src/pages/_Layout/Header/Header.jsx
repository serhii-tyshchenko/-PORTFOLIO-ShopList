import React from 'react';
import { AuthBtn } from 'modules/user';
import { ThemeToggler, LanguageSelector } from 'modules/settings';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__content wrapper">
      <a href="/" className="header__logo">
        ShopMe
      </a>
      <div className="header__menu">
        <LanguageSelector />
        <ThemeToggler />
        <AuthBtn />
      </div>
    </div>
  </header>
);

export { Header };
