import React from 'react';
 
class Main extends React.Component {
  render() {
    return (
        <main style={mainStyle.style} role="main">
          Main
        </main>
    );
  }    
}

const mainStyle = {
  style: {
    gridArea: "main",
    backgroundColor: 'white',
    display: "flex",
    justifyContent: "center",
  },
};

export default Main;