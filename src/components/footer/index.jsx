import React from 'react';

const footerStyle = {
  style: {
    gridArea: 'footer',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
  },
};

const Footer = () => (
  <footer style={footerStyle.style}>
    Footer
  </footer>
);

export default Footer;
