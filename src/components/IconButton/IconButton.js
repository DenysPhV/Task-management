import React from 'react';
import PropTypes from 'prop-types';

import s from './IconButton.module.scss';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    onClick={onClick}
    {...allyProps}
    className={s.IconButton}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propsTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;
