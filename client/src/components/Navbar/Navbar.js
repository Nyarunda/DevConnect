import React, { Fragment } from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import Account from '../Accounts/Account';
import Nav from './Nav';

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <div className='container'>
          <div className='header-data'>
            <Logo />
            <Search />
            <Nav />
            <Account />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
