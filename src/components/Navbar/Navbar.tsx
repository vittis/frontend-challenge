import React from 'react';
import logoSymbol from '../../assets/images/logo-symbol.svg';
import logoType from '../../assets/images/logo-type.svg';

function Navbar() {
  return (
    <nav className="bg-dark sm:bg-primary shadow sm:shadow-none py-4 sm:py-8">
      <div className="flex justify-center sm:justify-start container mx-auto px-3">
        <img src={logoSymbol} alt="logo-symbol" />
        <img src={logoType} alt="logo-type" className="ml-2 hidden sm:block" />
      </div>
    </nav>
  );
}

export default Navbar;
