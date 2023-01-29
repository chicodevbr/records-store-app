import React from 'react';

const NavbarMain = () => {
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
        <a className="text-neutral-focus normal-case text-5xl font-mono tracking-tight">
          Dark Records
        </a>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarMain;
