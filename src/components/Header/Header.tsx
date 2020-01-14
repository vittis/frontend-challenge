import React from 'react';
import twitterLogo from '../../assets/images/logo-twitter.svg';

import './header.scss';

function Header() {
  return (
    <header className="bg-primary text-white relative">
      <svg
        className="divider absolute bottom-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <polygon fill="#FF223E" points="0,0 0,100 100,100" />
      </svg>
      <div className="container mx-auto px-3">
        <h1 className="pt-8 font-bold text-4xl sm:text-6xl">Meet our team</h1>
        <h3 className="max-w-sm sm:max-w-2xl text-base sm:text-xl">
          We are a group of multi-skilled individuals who are entreprenurial by nature and live to
          make digital products and services that people love to use.
        </h3>
        <div className="flex opacity-75 text-base sm:text-xl mt-16 ">
          <img src={twitterLogo} alt="twitter-logo" />
          <span className="ml-2">Latest tweets from our team</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
