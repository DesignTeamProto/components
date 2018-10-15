import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MUIButton from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#001134',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: will be calculated from palette.secondary.main,
      main: '#58AEB5',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: will be calculated from palette.secondary.main,
    },
    // error: will use the default color
  },
});

const UIButton = ({
  color, children, classes, disabled, href, size, variant,
}) => (
  <MuiThemeProvider theme={theme}>
    <MUIButton
      disabled={disabled}
      href={href}
      color={color}
      variant={variant}
      size={size}
      className={classes.button}
    >
      {children}
    </MUIButton>
  </MuiThemeProvider>
);

UIButton.propTypes = {
  /** Button color */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'disabled',
    'link',
  ]),

  /** Button label */
  children: PropTypes.node.isRequired,

  /** Disable button */
  disabled: PropTypes.bool,

  /** Link href */
  href: PropTypes.string,

  /** Button size */
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),

  /** Button variant */
  variant: PropTypes.oneOf([
    'text',
    'contained',
    'outlined',
    'fab',
    'extendedFab',
  ]),

  classes: PropTypes.object.isRequired,
};

UIButton.defaultProps = {
  color: 'default',
  disabled: false,
  href: '',
  size: 'medium',
  variant: 'text',
};

export default withStyles(styles)(UIButton);
