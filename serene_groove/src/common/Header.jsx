import React from "react";
import logo from '../assets/sg_logo.png';
const Header = () => {
  return (
    <div className="flex w-full items-center justify-between px-52">
      <div className="flex gap-6">
        <span className="text-xl lg:text-base">Home</span>
        <span className="text-xl lg:text-base">Explore</span>
        <span className="text-xl lg:text-base">Story</span>
      </div>
      <img src={logo} alt="logo" className="w-32 h-32"/> 
      <button className="text-sm font-semibold bg-accent px-16 rounded-3xl text-white py-2">Book Now</button>
    </div>
  );
};

export default Header;
