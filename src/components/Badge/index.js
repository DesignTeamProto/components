import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

const StyledBadge = styled.span`
  display: inline-flex;
  position: relative;
  margin-right: 16px;

  .badge__content {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    font-size: 12px;
    border-radius: 22px;
    display: flex;
    align-content: center;
    justify-content: center;
    min-width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    padding: 0 8px;
    position: absolute;
    top: -11px;
    right: -11px;
  }
  .badge__content--primary {
      background-color: #5D5CC5;
      color: #fff;
  }
  .badge__content--secondary {
      background-color: #58AEB5;
      color: #fff;
  }
`;


const Badge = ({
  badgeContent,
  children,
  color = 'primary',
}) => (
  <StyledBadge className="badge">
    {children}
    <span className={classNames('badge__content', [`badge__content--${color}`])}>{badgeContent}</span>
  </StyledBadge>
);

Badge.propTypes = {
  /** This will contain text and/or an icon */
  badgeContent: PropTypes.string.isRequired,

  /** This will contain a button or an icon */
  children: PropTypes.node.isRequired,

  /** When provided, the badge will be displayed with a different color */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
};

export default Badge;
