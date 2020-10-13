import React from 'react';
import './header.css';

const Header = (props) => {
  return (
    <header className="header">
      Esta é a super calculadora de {props.autor}
    </header>
  );
};

export default Header;
