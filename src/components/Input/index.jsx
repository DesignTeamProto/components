import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.input`
  color: green;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = ({
  size, type,
}) => (
  <InputStyle type={type} size={size} />
);

Input.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  size: '1rem',
  type: 'text',
};

export default Input;
