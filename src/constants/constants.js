export const LOCAL_STORAGE_KEY = 'localData';
export const PRODUCT_FILTER_NAMES = {
  CATEGORIE: 'categorie',
  BRAND: 'brand',
};

export const PRODUCT_FILTER_PARAMS = {
  [PRODUCT_FILTER_NAMES.CATEGORIE]: [],
  [PRODUCT_FILTER_NAMES.BRAND]: [],
};

export const ROUTES = {
  HOME_PAGE: '/products',
  CREATE_PRODUCT: '/create',
  DETAILS: '/product',
  DETAILS_ROUTE: '/product/:id',
  EDIT_PAGE: '/product/edit',
  EDIT_PAGE_ROUTE: '/product/edit/:id',
  NOT_FOUND: '/404',
};

export const TITLES = {
  HOME_PAGE_TITLE: 'Product list',
  CREATE_PRODUCT_TITLE: 'Create new product',
  DETAILS_TITLE: 'Product details',
  EDIT_PAGE_TITLE: 'Edit product',
  NOT_FOUND_TITLE: 'Something went wrong',
};

export const PRODUCT_FORM_INPUT_NAMES = {
  TITLE: 'title',
  BRAND: 'brand',
  CATEGORIE: 'categorie',
  PRICE: 'price',
  IMG: 'img',
  DESCRIPTION: 'description',
};

export const REQUIRED_FIELDS = [
  PRODUCT_FORM_INPUT_NAMES.TITLE,
  PRODUCT_FORM_INPUT_NAMES.BRAND,
];
