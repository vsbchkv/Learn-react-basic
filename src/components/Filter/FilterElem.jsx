import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '@/components/common/Button/Button';

const FilterElem = ({
  children,
  filterParam,
  item,
  onFilter,
  filterItemActive,
}) => {
  const classes = classNames('filter__control', {
    'filter__control--active': filterItemActive,
  });

  const handleClick = () => {
    onFilter(filterParam, item);
  };

  return (
    <Button classExtra={classes} onClick={handleClick}>
      {children}
    </Button>
  );
};

FilterElem.propTypes = {
  item: PropTypes.string.isRequired,
  filterParam: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onFilter: PropTypes.func.isRequired,
  filterItemActive: PropTypes.bool.isRequired,
};

export default FilterElem;
