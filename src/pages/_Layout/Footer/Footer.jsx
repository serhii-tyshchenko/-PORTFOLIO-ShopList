import React from 'react';
import { LanguageSelector } from 'modules/settings';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content wrapper">
      <LanguageSelector />
    </div>
  </footer>
);

export { Footer };
