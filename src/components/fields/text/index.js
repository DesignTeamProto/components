import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'; 

class inputText extends React.Component {
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    return (
      <input 
        type="text" 
        onChange={this.updateSearch.bind(this)}
      />
    );
  }    
}    

export default inputText;