import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Button = ({
  children, className, disabled, size, onClick,
}) => (
  <button type="button" className={classnames(className, size)} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,

  /** The class of the button */
  className: PropTypes.string,

  /** The size of the button */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /** Disable button */
  disabled: PropTypes.bool,

  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: 'btn btn-primary mr-2',
  size: 'medium',
  disabled: false,
  onClick: event => ({
    // onClick
  }),
};

export default Button;
