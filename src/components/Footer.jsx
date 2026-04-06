import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Zharah SD Initiative Foundation. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-purple-300">Facebook</a>
          <a href="#" className="hover:text-purple-300">Twitter</a>
          <a href="#" className="hover:text-purple-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;