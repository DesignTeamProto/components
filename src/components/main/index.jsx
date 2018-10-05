import React from 'react';
import styled from 'styled-components';

const MainContent = styled.main`
  grid-area: main;
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

const Main = () => (
  <MainContent role="main" />
);

export default Main;
