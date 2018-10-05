import React from 'react';

const mainStyle = {
  style: {
    gridArea: 'main',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
};

const Main = () => (
  <main style={mainStyle.style} role="main">Main</main>
);

export default Main;
