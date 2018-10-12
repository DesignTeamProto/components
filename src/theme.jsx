import { createMuiTheme } from '@material-ui/core/styles';

// DEFINE YOUR PRIMARY COLORS HERE //
const primColors = {
  black: '#000A1E',
  primColor: '#176bff',
};

// DIMENSIONS SETTINGS //
const dimensionSettings = {
  spacing: '2rem',
};

// MAIN //
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;
