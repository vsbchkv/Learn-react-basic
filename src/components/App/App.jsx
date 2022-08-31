import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from '@/components/Layout/Layout';
import {
  LOCAL_STORAGE_KEY,
  PRODUCT_FILTER_PARAMS,
} from '@/constants/constants';
import { DataContext, FilterContext } from '@/context';
import Routes from '@/routes/Routes';
import { getLocalData, setLocalData } from '@/services/localStorageService';
import staticData from '@/static.json';

/** Gets initial data from localstorage or json file */
const initialState = !getLocalData(LOCAL_STORAGE_KEY)
  ? staticData
  : getLocalData(LOCAL_STORAGE_KEY);

const App = () => {
  /** Global products state init */
  const [data, setData] = useState(initialState);
  /** Global product filters state init */
  const [filters, setFilters] = useState(PRODUCT_FILTER_PARAMS);

  /** Hook watches the global state changes and saves it to localstorage */
  useEffect(() => {
    setLocalData(LOCAL_STORAGE_KEY, data);
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <FilterContext.Provider value={{ filters, setFilters }}>
        <BrowserRouter>
          <Layout>
            <Routes />
          </Layout>
        </BrowserRouter>
      </FilterContext.Provider>
    </DataContext.Provider>
  );
};

export default App;
