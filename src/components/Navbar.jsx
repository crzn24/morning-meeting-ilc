import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BobcatLogo from "../assets/Bobcat.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1D1E1F] text-gray-300">
      {/* Logo  */}
      <div>
        <img
          src={BobcatLogo}
          alt="Bobcat Logo"
          style={{ width: "69px" }}
          className="hover:scale-110 duration-500"
        />
      </div>

      {/* Nav Menu  */}
      <div>
        <ul className="hidden md:flex">
          <li className="rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500">
            Home
          </li>
          <li className="rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500">
            Morning
          </li>
          <li className="rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500">
            Calendar
          </li>
          <li className="rounded-full hover:scale-110 hover:shadow-md hover:shadow-white duration-500">
            Feelings
          </li>
        </ul>
      </div>

      {/* Hamburger Menu  */}
      <div className="hidden">
        <FaBars />
      </div>

      {/* Mobile Menu  */}
      <ul className="hidden">
        <li>Home</li>
        <li>Morning</li>
        <li>Calendar</li>
        <li>Feelings</li>
      </ul>
    </div>
  );
};

export default Navbar;
