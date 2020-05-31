import React from 'react';
import './Footer.scss';
import { LanguageSelector } from 'modules/settings';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content wrapper">
      <LanguageSelector />
    </div>
  </footer>
);

export { Footer };
