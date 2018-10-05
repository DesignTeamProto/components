import React from 'react';

class InputSearch extends React.Component {
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    return (
      <input 
        type="search"
        aria-label="search text"
        onChange={this.updateSearch.bind(this)}
      />
    );
  }    
}    

export default InputSearch;