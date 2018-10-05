import React from 'react';
import logo from '../../logo.svg';

class Logo extends React.Component {
  render() {
    return (
      <a href="/" rel="home">
        <img src={logo} alt="Main product logo" />
      </a>
    );
  }    
}

export default Logo;