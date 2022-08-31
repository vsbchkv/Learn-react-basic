import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import * as icons from '@/components/media/icons';

export const WithSvg = ({ iconName, className, ...attrs }) => {
  const iconClasses = classNames('icon', className);
  const Icon = icons[iconName];
  return Icon ? <Icon className={iconClasses} {...attrs} /> : null;
};

WithSvg.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
  attrs: PropTypes.object,
};
