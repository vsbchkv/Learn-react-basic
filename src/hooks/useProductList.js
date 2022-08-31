import { useContext } from 'react';

import { DataContext, FilterContext } from '@/context';

const useProductsList = () => {
  const { filters } = useContext(FilterContext);
  const { data } = useContext(DataContext);

  const productsById = Object.values(data);

  return productsById.filter((product) => {
    let isInCategorie = true;
    let isInBrand = true;

    if (filters.categorie.length) {
      isInCategorie = filters.categorie.includes(product.categorie);
    }

    if (filters.brand.length) {
      isInBrand = filters.brand.includes(product.brand);
    }

    return isInCategorie && isInBrand;
  });
};

export default useProductsList;
