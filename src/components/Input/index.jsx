import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.input`
  outline: none;
  border: none;
  border-radius: 0.2rem;
  background-color: transparent;
  box-shadow: 0 0.2rem 0.3rem 0 rgba(39, 39, 39, 0.21);
  height: 4.2rem;
  padding: 1rem;
  color: rgba(255,255,255,0.7);
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  width: 100%;
`;

const InputStyleIcon = styled(InputStyle)`
  padding-left: 0.5rem;
`;

const Input = ({
  placeholder, type,
}) => (
  <InputStyleIcon type={type} placeholder={placeholder} />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Zoek naar klanten en relaties',
  type: 'text',
};

export default Input;
