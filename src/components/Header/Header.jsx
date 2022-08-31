import './Header.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/constants';

const Header = () => {
  return (
    <header className='header container'>
      <Link to={ROUTES.HOME_PAGE}>
        <img
          className='logo header__logo'
          src='https://d1aeri3ty3izns.cloudfront.net/media/53/537489/1200/preview.jpg'
          alt='logo'
        />
      </Link>
    </header>
  );
};

export default Header;
