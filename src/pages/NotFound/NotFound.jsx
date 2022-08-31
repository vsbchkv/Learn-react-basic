import './notFound.scss';

import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import ProductCreateLink from '@/components/Product/ProductCreateLink';
import { TITLES } from '@/constants/constants';
import { ROUTES } from '@/constants/constants';

const NotFound = ({ redirectPath }) => {
  return (
    <div className='not-found'>
      <h2 className='title'>{TITLES.NOT_FOUND_TITLE}</h2>
      <div className='not-found__desc'>
        <p className='not-found__text'>This page doesn&apos;t exist.</p>
        <Link
          to={redirectPath}
          className='button button--primary not-found__redirect-btn'
        >
          Back to products
        </Link>
        or
        <ProductCreateLink redirectPath={ROUTES.CREATE_PRODUCT} horizontal>
          Create new product
        </ProductCreateLink>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  redirectPath: PropTypes.string.isRequired,
};
export default NotFound;
