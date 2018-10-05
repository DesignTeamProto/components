import React, { Component } from 'react';
import './App.css';
import Button from "./components/button";
import Icon from "./components/icon";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
      );
  }
}
 
export default App;