import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; 
import HeaderSearch from "../../components/forms/search";
import Logo from "../../components/logo";

class Header extends React.Component {
  render() {
    return (
      <header style={headerStyle.style}>
        <Logo />
        <HeaderSearch />
      </header>
    );
  }    
}

const headerStyle = {
  style: {
    gridArea: "header",
    backgroundColor: '#001134',
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
  },
};

export default Header;