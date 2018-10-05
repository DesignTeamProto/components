import React from 'react';
import styled from 'styled-components';
import Image from '../../image.png';

const MainContent = styled.main`
  grid-area: main;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const Main = () => (
  <MainContent role="main">
    <img src={Image} alt="Hi there!" height="401" width="401" />
  </MainContent>
);

export default Main;
