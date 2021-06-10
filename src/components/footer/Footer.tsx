import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>©2021 appinio</p>
      <div className="footer__language language">
        <p>Impressum</p>
        <div className="language__border"></div>
        <select className="language__select">
          <option>Language</option>
          <option>English</option>
          <option>Deutsch</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
