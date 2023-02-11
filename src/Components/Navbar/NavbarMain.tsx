import { Link } from 'react-router-dom';
import CartDrop from '../CartDrop';
import { useStore } from '../../Store';

const NavbarMain = () => {
  const { cart } = useStore();
  return (
    <div className="navbar mb-7">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://www.svgrepo.com/show/80478/vinyl.svg" />
            </div>
          </label>
        </a>
      </div>
      <div className="navbar-center">
        <Link to={'/'}>
          <p className="text-neutral-focus normal-case text-5xl font-mono font-bold tracking-tight">
            Dark Records
          </p>
        </Link>
      </div>
      <div className="navbar-end">
        <CartDrop cart={cart} />
      </div>
    </div>
  );
};

export default NavbarMain;
