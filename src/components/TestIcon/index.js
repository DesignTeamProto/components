import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TestIcon = ({
  icon,
}) => (
  <i className={classNames('icon', icon)} />
);

TestIcon.propTypes = {
  /** The icon that is displayed */
  icon: PropTypes.string,
};

export default TestIcon;
