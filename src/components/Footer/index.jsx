import React from 'react';
import styled from 'styled-components';

const MainFooter = styled.footer`
  grid-area: footer;
  background-color: #001134;
  display: flex;
  justify-content: center;
  height: 4rem;
`;

const Footer = () => (
  <MainFooter>
    Footer
  </MainFooter>
);

export default Footer;
