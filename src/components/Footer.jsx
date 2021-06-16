import React from 'react';

import Logo from '../assets/images/footer/logofooter.png';

//social icons
import fbicon from '../assets/images/footer/facebooklogo.png';
import linicon from '../assets/images/footer/linkdinlogo.png';
import sicon from '../assets/images/footer/slogo.png';
import markicon from '../assets/images/footer/marklogo.png';

const Footer = () => {
  return (
    <header className="p-8 max-w-full flex justify-between flex-wrap">
      <div className="flex">
        <img src={Logo} alt="logo footer" />
        <p className="text-white ml-4 text-sm"> © 2018 Toast Design. Terms & Conditions.</p>
      </div>
      <div className="md:mt-0  mt-6">
        <p className="text-white">CALL +64 9 489 2726</p>
      </div>
      <div className="flex md:mt-0  mt-6">
        <img src={sicon} className="object-contain" alt="facebook logo" />
        <img src={fbicon} className="object-contain ml-4" alt="facebook logo" />
        <img src={linicon} className="object-contain ml-4" alt="facebook logo" />
        <img src={markicon} className="object-contain ml-4" alt="facebook logo" />
      </div>
    </header>
  );
};

export default Footer;
