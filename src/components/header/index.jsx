import React from 'react';
import HeaderSearch from '../forms/search';
import Logo from '../logo';

const headerStyle = {
  style: {
    gridArea: 'header',
    backgroundColor: '#001134',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
  },
};

function Header() {
  return (
    <header style={headerStyle.style}>
      <Logo />
      <HeaderSearch />
    </header>
  );
}

export default Header;
