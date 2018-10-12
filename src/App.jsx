import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import './themeGlobals';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
