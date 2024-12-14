import React from "react";

function Navbar() {
  return (
    <div className="bg-purple-800 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/Logo.svg" lass="w-[10px] h-[10px] object-cover rounded-lg" alt="Logo"  ></img>
        <ul className="hidden md:flex space-x-8 text-sm">
          <li><a href="#" className="hover:text-orange-400">SERVICES</a></li>
          <li><a href="#" className="hover:text-orange-400">ABOUT US</a></li>
          <li><a href="#" className="hover:text-orange-400">CONTACT US</a></li>
          <li><a href="#" className="hover:text-orange-400">CAREERS</a></li>
        </ul>
        <button className="md:hidden px-4 py-2 bg-orange-500 rounded">Menu</button>
      </div>
    </div>
  );
}

export default Navbar;
  