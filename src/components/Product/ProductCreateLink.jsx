import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { AddNew } from '@/components/media/icons';

const ProductCreateLink = ({ redirectPath, children, horizontal = false }) => {
  const classes = classNames('product-create', {
    'product-create--horizontal': horizontal,
  });
  return (
    <Link to={redirectPath} className={classes}>
      <AddNew className='product-create__icon' />
      {children}
    </Link>
  );
};

ProductCreateLink.propTypes = {
  redirectPath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  horizontal: PropTypes.bool,
};

export default ProductCreateLink;
