import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const StyledButton = styled.button`
  margin: 0.3rem;
`;

const Button = ({
  children, className, disabled, onClick, buttonSize, buttonState, buttonStyle,
}) => (
  <StyledButton type="button" className={classnames(className, buttonStyle, buttonSize, buttonState)} onClick={onClick} disabled={disabled}>
    {children}
  </StyledButton>
);

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,

  /** The class of the button */
  className: PropTypes.string,

  /** The style of the button */
  buttonStyle: PropTypes.oneOf([
    'btn-primary',
    'btn-secondary',
    'btn-danger',
    'btn-success',
    'btn-warning',
    'btn-info',
    'btn-light',
    'btn-dark',
    'btn-link',
  ]),

  /** Disable button */
  disabled: PropTypes.bool,

  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,

  /** The size of the button */
  buttonSize: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),

  /** The state of the button */
  buttonState: PropTypes.oneOf([
    'default',
    'loading',
    'active',
  ]),
};

Button.defaultProps = {
  className: 'btn',
  disabled: false,
  onClick: event => ({
    // onClick
  }),
  buttonSize: 'medium',
  buttonState: 'default',
  buttonStyle: 'btn-primary',
};

export default Button;
