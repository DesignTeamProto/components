import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  children,
}) => (
  <form>
    {children}
  </form>
);

Form.propTypes = {
  /** Button label */
  children: PropTypes.element.isRequired,
};

export default Form;
