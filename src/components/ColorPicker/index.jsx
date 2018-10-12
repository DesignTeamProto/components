import React from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

class ColorPicker extends React.Component {
    state = { background: '#fff'};
    
    render() {
      return (
            <ChromePicker
            color={ this.state.background }
            onChange={ this.handleChange }
        />
      );
    }
  }
  
  export default ColorPicker;