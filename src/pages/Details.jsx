import React, { useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import Product from '@/components/Product/Product';
import { TITLES } from '@/constants/constants';
import { ROUTES } from '@/constants/constants';
import { DataContext } from '@/context';

const Details = () => {
  const { data, setData } = useContext(DataContext);
  const { id } = useParams();
  const product = data[id];
  const history = useHistory();

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
    history.push(ROUTES.HOME_PAGE);
  };

  return product ? (
    <React.Fragment>
      <h1 className='title'>{TITLES.DETAILS_TITLE}</h1>
      <div className='product-details'>
        <Product
          handleLikeToggle={() => handleLikeToggle(id)}
          handleItemDelete={() => handleItemDelete(id)}
          editPagePath={`${ROUTES.EDIT_PAGE}/${id}`}
          {...product}
        />
      </div>
    </React.Fragment>
  ) : (
    <Redirect to={ROUTES.NOT_FOUND} />
  );
};

export default Details;
