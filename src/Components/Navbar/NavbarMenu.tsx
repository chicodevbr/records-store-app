import React from 'react';
import Genre from './Genre';
import Search from '../../UI/Search';

const NavbarMenu = () => {
  return (
    <div className="flex justify-center flex-row text-md space-x-40 pb-5">
      <Genre />
      <a>New Releases</a>
      <a>Vinyl</a>
      <a>CD</a>
      <a>Brazil</a>
      <a>About</a>
    </div>
  );
};

export default NavbarMenu;
