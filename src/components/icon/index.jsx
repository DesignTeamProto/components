import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';
import Icons from '../../icons/search.svg';

const IconStyle = styled.i`
  color: #fff;
  padding: 1rem;
`;

const IconImage = styled.img`
  color: #fff;
  opacity: 0.6;
  height: 1.5rem;
  width: 1.5rem;
`;

const Icon = ({ className, image }) => (
  <IconStyle>
    <IconImage src={image} alt="icon" className={classnames(className)} />
  </IconStyle>
);

Icon.propTypes = {
  /** Icon className */
  className: PropTypes.string,

  /** Icon image */
  image: PropTypes.string,
};

Icon.defaultProps = {
  className: 'icon',
  image: Icons,
};

export default Icon;
