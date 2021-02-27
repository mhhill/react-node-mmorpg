import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

export default function Header() {
  function HeaderView() {
    let location = useLocation();
    if (location.pathname === '/pagewithoutheader') return false;
    return true;
  }

  return (
    <>
      {HeaderView() ? (
        <header id='header'>
          <Link to='/'>
            <h1 className='title'>Stillistiss</h1>
          </Link>
          <AuthOptions />
        </header>
      ) : null}
    </>
  );
}
