import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.input`
  width: 100%;
  padding: 0.4rem 1rem;
`;

const InputStyleIcon = styled(InputStyle)`
  padding-left: 0.5rem;
`;

class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  componentDidMount() {
    if (this.input.current) {
      this.input.current.focus()
    }
  }

  render() {
    return (
      <InputStyleIcon type={Input.defaultProps.type} placeholder={Input.defaultProps.placeholder} />
    )
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Zoek naar klanten en relaties',
  type: 'text',
};

export default Input;
