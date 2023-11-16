import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BobcatLogo from "../assets/Bobcat.png";

const Navbar = () => {
  // keep state
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav); //Sets value of nav to its opposite value. If true will set it to true, and vice versa. Function is used for hamburger mobile menu to close after selecting item.

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

      {/* Hamburger Menu  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu  */}
      {/* ternary operator */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1D1E1F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75">
          Home
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75">
          Morning
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75">
          Calendar
        </li>
        <li className="py-6 text-4xl hover:scale-110 duration-500 hover:underline decoration-gray-100/75">
          Feelings
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
