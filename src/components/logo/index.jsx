import React from 'react';
import logo from '../../logo.svg';

function Logo() {
  return (
    <a href="/" rel="home">
      <img src={logo} alt="Main product logo" />
    </a>
  );
}

export default Logo;
