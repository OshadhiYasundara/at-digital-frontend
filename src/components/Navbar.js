import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-primary px-20 ">
      <div className=" h-16 container sm:mx-auto  w-full flex justify-between items-center">
     
        <img src="/Logo.svg" alt="Logo" className="w-36 h-auto" />
        <img src="menu.svg" alt="Menu" className="w-6 h-auto md:hidden" />

   
        <ul className="hidden md:flex space-x-7 text-white text-sm font-inter font-medium">
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="#">SERVICES</a>
  </li>
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="#">ABOUT US</a>
  </li>
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="#">CONTACT US</a>
  </li>
  <li className="hover:text-orange transition-all duration-300 ease-in-out">
    <a href="#">CAREERS</a>
  </li>
</ul>


      </div>
    </div>
  );
};

export default Navbar;
