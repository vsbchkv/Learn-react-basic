import './Filter.scss';

import React, { useContext, useMemo } from 'react';

import Button from '@/components/common/Button/Button';
import { ResetIcon } from '@/components/media/icons';
import {
  PRODUCT_FILTER_NAMES,
  PRODUCT_FILTER_PARAMS,
} from '@/constants/constants';
import { DataContext, FilterContext } from '@/context';

import FilterElem from './FilterElem';

const Filter = () => {
  const { data } = useContext(DataContext);
  const { filters, setFilters } = useContext(FilterContext);

  const handleItemsFilter = (rule, name) => {
    setFilters((currentFilters) => {
      if (!currentFilters[rule].includes(name)) {
        return {
          ...currentFilters,
          [rule]: [...currentFilters[rule], name],
        };
      }

      return {
        ...currentFilters,
        [rule]: currentFilters[rule].filter((el) => el !== name),
      };
    });
  };

  const handleFilterReset = () => {
    setFilters(PRODUCT_FILTER_PARAMS);
  };

  const filterParams = useMemo(() => {
    let filterValues = {};
    Object.keys(filters).forEach((key) => {
      filterValues = { ...filterValues, [key]: new Set() };
    });

    Object.values(data).forEach((item) => {
      Object.keys(item).forEach((key) => {
        if (key && filterValues[key]) {
          filterValues[key].add(item[key]);
        }
      });
    });
    return filterValues;
  }, [filters, data]);

  const isActive = (rule, item) => {
    return filters[rule].includes(item);
  };

  const categoriesList = [...filterParams[PRODUCT_FILTER_NAMES.CATEGORIE]].map(
    (item) => {
      return (
        <FilterElem
          key={item}
          item={item}
          filterParam={PRODUCT_FILTER_NAMES.CATEGORIE}
          filters={filters}
          onFilter={handleItemsFilter}
          filterItemActive={isActive(PRODUCT_FILTER_NAMES.CATEGORIE, item)}
        >
          {item}
        </FilterElem>
      );
    }
  );

  const brandsList = [...filterParams[PRODUCT_FILTER_NAMES.BRAND]].map(
    (item) => {
      return (
        <FilterElem
          key={item}
          item={item}
          filterParam={PRODUCT_FILTER_NAMES.BRAND}
          filters={filters}
          onFilter={handleItemsFilter}
          filterItemActive={isActive(PRODUCT_FILTER_NAMES.BRAND, item)}
        >
          {item}
        </FilterElem>
      );
    }
  );

  return (
    <div className='filter'>
      <Button classExtra='filter__reset' onClick={handleFilterReset}>
        <ResetIcon />
      </Button>

      <div className='filter__list'>{categoriesList}</div>
      <div className='filter__list'>{brandsList}</div>
    </div>
  );
};

export default Filter;
