import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.input`
  width: 100%;
  padding: 0.4rem 1rem;
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
