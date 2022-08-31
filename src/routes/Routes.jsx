import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES } from '@/constants/constants';
import CreateProduct from '@/pages/CreateProduct';
import Details from '@/pages/Details';
import Edit from '@/pages/Edit';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path={ROUTES.CREATE_PRODUCT} component={CreateProduct} />
      <Route exact path={ROUTES.HOME_PAGE} component={Home} />
      <Route exact path={ROUTES.DETAILS_ROUTE} component={Details} />
      <Route exact path={ROUTES.EDIT_PAGE_ROUTE} component={Edit} />
      <Route
        exact
        path={ROUTES.NOT_FOUND}
        render={() => <NotFound redirectPath={ROUTES.HOME_PAGE} />}
      />
      <Redirect to={ROUTES.HOME_PAGE} />
    </Switch>
  );
};

export default Routes;
