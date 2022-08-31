import PropTypes from 'prop-types';
import React from 'react';

import Header from '@/components/Header/Header';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className='container'>{children}</main>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
