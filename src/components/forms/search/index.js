import React from 'react';
import InputSearch from "../../../components/fields/search";

class HeaderSearch extends React.Component {
  render() {
    return (
      <form role="search">
        <InputSearch />
      </form>
    );
  }    
}    

export default HeaderSearch;