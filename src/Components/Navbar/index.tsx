import Divider from '../../UI/Divider';

import NavbarMain from './NavbarMain';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <div className="flex-col neutral-content shadow-md">
      <NavbarMain />
      <Divider />
      <NavbarMenu />
    </div>
  );
};

export default Navbar;
