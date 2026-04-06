import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl font-bold">
          Zharah SD Initiative Foundation
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-purple-300">Home</a></li>
          <li><a href="#about" className="hover:text-purple-300">About</a></li>
          <li><a href="#programs" className="hover:text-purple-300">Programs</a></li>
          <li><a href="#impact" className="hover:text-purple-300">Impact</a></li>
          <li><a href="#partners" className="hover:text-purple-300">Partners</a></li>
          <li><a href="#getinvolved" className="hover:text-purple-300">Get Involved</a></li>
          <li><a href="#donate" className="hover:text-purple-300 font-semibold">Donate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;