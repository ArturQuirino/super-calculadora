import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      Esta é a super calculadora de {props.autor}
      <nav className="header__navigation-container">
        <Link to="/" className="header__navigation-container__link">
          Calculadora
        </Link>
        <Link to="/sobre" className="header__navigation-container__link">
          Sobre
        </Link>
      </nav>
    </header>
  );
};

export default Header;
