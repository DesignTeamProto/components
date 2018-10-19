import React from 'react';
import PropTypes from 'prop-types';
import MuiBadge from '@material-ui/core/Badge';

const Badge = ({
  badgeContent, classes, children, color, component,
}) => (
  <MuiBadge
    badgeContent={badgeContent}
    classes={classes}
    color={color}
    component={component}
  >
    {children}
  </MuiBadge>
);

// Specifies the default values for props:
Badge.defaultProps = {
  color: 'default',
  component: 'span',
};

Badge.propTypes = {
  /** The content rendered within the badge */
  badgeContent: PropTypes.node.isRequired,

  /** The badge will be added relative to this node */
  children: PropTypes.node.isRequired,

  /** Classes for the badge */
  classes: PropTypes.object,

  /** The color of the component */
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'error',
  ]),

  /** The component used for the root node */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default Badge;
