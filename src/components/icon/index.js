import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
 
const Icon = ({ className = 'icon', name = 'test', size = 'm' }) => (
  <i className={classnames(className, size)}>{name}</i>
);
 
Icon.propTypes = {
  /** Icon className */
  className: PropTypes.string,
  /** Icon name */
  name: PropTypes.string,
  /** Icon size */
  size: PropTypes.string,
};
 
export default Icon;