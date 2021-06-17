import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__section--left section">
          <div className="section__logo--left">
            <img
              className="section--logo"
              src="/images/logo-white.png"
              alt="section-logo"
            />
          </div>
          <ul className="section__menu menu">
            <li className="menu__item">
              <a className="menu__item--hover" href="/">
                Dashboard
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--hover" href="/">
                Umfragen
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__item--hover" href="/">
                Profiling
              </a>
            </li>
          </ul>
        </div>
        <div className="header__section--right section">
          <button className="section__button section__button--gray">
            4.300 Credits
          </button>
          <button className="section__button section__button--blue">
            Umfrage erstellen
          </button>
          <a className="section__profile" href="/">
            JK
          </a>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
