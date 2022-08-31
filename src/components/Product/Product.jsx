import './Product.scss';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/common/Button/Button';
import { WithSvg } from '@/components/media/WithSvg';

const Product = ({
  title,
  img,
  price,
  like,
  description,
  classExtra,
  handleLikeToggle,
  handleItemDelete,
  detailsPagePath,
  editPagePath,
}) => {
  const productClasses = classNames('product', classExtra, {
    'product--detailed': description,
  });

  const likeIconClasses = classNames('product__like-icon', {
    'product__like-icon--active': like,
  });

  const productImgClasses = classNames('product__img', {
    'product__img--detailed': description,
  });

  return (
    <div className={productClasses}>
      <h4 className='product__title'>{title}</h4>
      <img className={productImgClasses} src={img} alt={`${title} picture`} />
      <span className='product__price'>£ {price}</span>
      <Button classExtra='button product__like' onClick={handleLikeToggle}>
        <WithSvg
          iconName={'Star'}
          className={['product__icon', likeIconClasses]}
        />
      </Button>
      <Button classExtra='button product__delete' onClick={handleItemDelete}>
        <WithSvg iconName={'Bucket'} className='product__icon' />
      </Button>
      {detailsPagePath && (
        <Link to={detailsPagePath} className='product__details'>
          <WithSvg iconName={'Details'} className='product__icon' />
        </Link>
      )}
      <Link to={editPagePath} className='product__edit'>
        <WithSvg iconName={'Edit'} className='product__icon' />
      </Link>
      {description && <p className='product__desc'>{description}</p>}
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  like: PropTypes.bool,
  description: PropTypes.string,
  detailed: PropTypes.bool,
  tag: PropTypes.string,
  classExtra: PropTypes.string,
  handleLikeToggle: PropTypes.func.isRequired,
  handleItemDelete: PropTypes.func.isRequired,
  detailsPagePath: PropTypes.string,
  editPagePath: PropTypes.string.isRequired,
};

export default Product;
