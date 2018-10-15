import React from 'react';
import logo from '../../logo.svg';
import styled from 'styled-components';

const ImageWrapper = styled.a`
  margin-left: 0.5rem;
`;

const Logo = () => (
  <ImageWrapper href="/" rel="home">
    <img src={logo} alt="Main product logo" />
  </ImageWrapper>
);

export default Logo;
