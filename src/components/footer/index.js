import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
 
class Footer extends React.Component {
  render() {
    return (
        <footer style={footerStyle.style}>
          Footer
        </footer>
    );
  }    
}    

const footerStyle = {
  style: {
    gridArea: "footer",
    backgroundColor: 'black',
    display: "flex",
    justifyContent: "center",
  },
};

export default Footer;