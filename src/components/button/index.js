import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#5D5CC5',
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

const Button = ({
  children,
  classes,
  color,
  component,
  disabled,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  href,
  mini,
  onClick,
  size,
  variant,
}) => (
  <MuiThemeProvider theme={theme}>
    <MuiButton
      classes={classes}
      color={color}
      component={component}
      disabled={disabled}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      fullWidth={fullWidth}
      href={href}
      mini={mini}
      onClick={onClick}
      variant={variant}
      size={size}
    >
      {children}
    </MuiButton>
  </MuiThemeProvider>
);

Button.propTypes = {
  /** The content of the button */
  children: PropTypes.node.isRequired,

  /** Override or extend the styles applied to the component */
  classes: PropTypes.object,

  /** The color of the component */
  color: PropTypes.oneOf([
    'default',
    'inherit',
    'primary',
    'secondary',
  ]),

  /** The component used for the root node */
  component: PropTypes.string,

  /** If true, the button will be disabled */
  disabled: PropTypes.bool,

  /** If true, the keyboard focus ripple will be disabled. disableRipple must also be true */
  disableFocusRipple: PropTypes.bool,

  /** If true, the ripple effect will be disabled */
  disableRipple: PropTypes.bool,

  /** If true, the button will take up the full width of its container */
  fullWidth: PropTypes.bool,

  /** The URL to link to when the button is clicked */
  href: PropTypes.string,

  /** If true, and variant is 'fab', will use mini floating action button styling */
  mini: PropTypes.bool,

  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,

  /** Button size */
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),

  /** Button variant */
  variant: PropTypes.oneOf([
    'text',
    'outlined',
    'contained',
    'fab',
    'extendedFab',
  ]),

};

Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  fullWidth: false,
  href: '',
  mini: false,
  onClick: event => ({
    // onClick
  }),
  size: 'medium',
  variant: 'text',
};

export default Button;
