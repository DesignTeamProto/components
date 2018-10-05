import React from 'react';
import styled from 'styled-components';

const MainFooter = styled.footer`
  grid-area: footer;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

const Footer = () => (
  <MainFooter>
    Footer
  </MainFooter>
);

export default Footer;
