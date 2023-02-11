import Genre from './Genre';

import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <div className="flex justify-center flex-row text-md space-x-40 pb-5">
      <Link to={'/records/all'}>All</Link>
      <Genre />
      <Link to={'/category/new-releases'}>New Releases</Link>
      <Link to={'/type/vinyl'}>Viny</Link>
      <Link to={'/type/cd'}>CD</Link>
      <Link to={'/genre/brasil'}>Brasil</Link>
      <Link to={'/'}>About</Link>
    </div>
  );
};

export default NavbarMenu;
