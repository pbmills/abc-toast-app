import React from 'react';

const Header = () => {
  return (
    <>
      <header className="p-8 max-w-full flex lg:justify-between justify-center">
        <div>
          <img src="/logo.png" className="h-40px" alt="logo" />
        </div>
        <div className="lg:block hidden">
          <button className="pb-3 px-6 pt-1 uppercase tracking-wide text-sm border border-white shadow-md text-white bg-transparent hover:bg-white hover:text-black ">
            Upgrade now
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
