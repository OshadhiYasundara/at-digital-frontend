import React from "react";
 
const Footer = () => {
  return (
    <footer className=" px-40 bg-primary text-white py-8">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 md:col-span-6  flex md:grid flex-col ">
        <img src={"/Logo.svg"} alt="AT Digital Logo" className="h-6  mb-4 "  />
          <p className="text-sm w-[413px] font-Lato">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective - your
            business results.
          </p>
        </div>
    
        <div className="col-span-12 md:col-span-3 font-inter">
          <h3 className="font-semibold text-lg mb-4">Our Technologies</h3>
          <ul className="space-y-3 text-xs">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-2  font-inter">
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-3 text-xs ">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-custom-purple-light mt-8 pt-3 text-sm text-center mx-96">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline ">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



