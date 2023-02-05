import React from 'react';
import Genre from './Genre';
import Search from '../../UI/Search';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <div className="flex justify-center flex-row text-md space-x-40 pb-5">
      <Genre />
      <Link to={'/category/new-releases'}>
        <a>New Releases</a>
      </Link>

      <a>Vinyl</a>
      <a>CD</a>
      <a>Brazil</a>
      <a>About</a>
    </div>
  );
};

export default NavbarMenu;
