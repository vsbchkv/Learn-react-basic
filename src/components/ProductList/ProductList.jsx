import './ProductList.scss';

import classNames from 'classnames';
import React, { useContext } from 'react';

import Product from '@/components/Product/Product';
import ProductCreateLink from '@/components/Product/ProductCreateLink';
import { ROUTES } from '@/constants/constants';
import { DataContext } from '@/context';
import useProductsList from '@/hooks/useProductList';

const ProductList = () => {
  const { data, setData } = useContext(DataContext);

  const handleLikeToggle = (productId) => {
    const product = data[productId];
    const updatedProduct = { ...product, like: !product.like };
    const newData = { ...data, [productId]: updatedProduct };
    setData(newData);
  };

  const handleItemDelete = (key) => {
    // eslint-disable-next-line
    const { [key]: deleted, ...other } = data;
    setData(other);
  };

  const filteredItems = useProductsList();
  const products = filteredItems.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <Product
          handleLikeToggle={() => handleLikeToggle(id)}
          handleItemDelete={() => handleItemDelete(id)}
          detailsPagePath={`${ROUTES.DETAILS}/${id}`}
          editPagePath={`${ROUTES.EDIT_PAGE}/${id}`}
          {...itemProps}
          description={null}
        />
      </li>
    );
  });

  const productListClasses = classNames('product-list', {
    'product-list--empty': !filteredItems.length,
  });

  return (
    <ul className={productListClasses}>
      <li className='product product--create'>
        <ProductCreateLink redirectPath={ROUTES.CREATE_PRODUCT}>
          {filteredItems.length ? 'create new' : 'products not found'}
        </ProductCreateLink>
      </li>
      {products}
    </ul>
  );
};

export default ProductList;
