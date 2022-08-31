import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ProductEdit from '@/components/Product/ProductEdit';
import { ROUTES } from '@/constants/constants';
import { TITLES } from '@/constants/constants';
import { DataContext } from '@/context';
import createId from '@/methods/createId';

const CreateProduct = () => {
  const { setData } = useContext(DataContext);
  const history = useHistory();

  const handleProductCreate = (product) => {
    const id = createId();
    const newProduct = { [id]: { ...product, id: id } };

    setData((prevState) => ({
      ...prevState,
      ...newProduct,
    }));
    history.push(ROUTES.HOME_PAGE);
  };

  return (
    <React.Fragment>
      <h1 className='title'>{TITLES.CREATE_PRODUCT_TITLE}</h1>
      <ProductEdit
        onConfirm={handleProductCreate}
        submitBtnText='Create new product'
      />
    </React.Fragment>
  );
};

export default CreateProduct;
