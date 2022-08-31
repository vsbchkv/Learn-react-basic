import React, { useCallback, useContext } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';

import ProductEdit from '@/components/Product/ProductEdit';
import { ROUTES } from '@/constants/constants';
import { TITLES } from '@/constants/constants';
import { DataContext } from '@/context';

const Edit = () => {
  const { data, setData } = useContext(DataContext);
  const { id } = useParams();
  const history = useHistory();
  const product = data[id];

  const handleProductEdit = useCallback(
    (product) => {
      setData((prevState) => ({
        ...prevState,
        [id]: product,
      }));
      history.push(ROUTES.HOME_PAGE);
    },
    [id, history, setData]
  );

  const initialValues = data[id];

  return product ? (
    <React.Fragment>
      <h1 className='title'>{TITLES.EDIT_PAGE_TITLE}</h1>
      <div className='product-edit'>
        <ProductEdit
          initialValues={initialValues}
          onConfirm={handleProductEdit}
          submitBtnText='Edit product'
        />
      </div>
    </React.Fragment>
  ) : (
    <Redirect to={ROUTES.NOT_FOUND} />
  );
};

export default Edit;
