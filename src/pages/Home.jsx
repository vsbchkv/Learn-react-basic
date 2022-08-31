import React from 'react';

import Filter from '@/components/Filter/Filter';
import ProductList from '@/components/ProductList/ProductList';
import { TITLES } from '@/constants/constants';

const Home = () => {
  return (
    <React.Fragment>
      <h1 className='title'>{TITLES.HOME_PAGE_TITLE}</h1>
      <Filter />
      <ProductList />
    </React.Fragment>
  );
};

export default Home;
