import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import Buttonnav from "./Buttonnav";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" max-w-7xl mx-auto  " >
      <nav className="navbar  backdrop-blur-sm border-b border-gray-100 py-5 flex justify-between gap-0 items-center fixed top-0 left-0 w-full z-10">
        <div className="nav-brand flex items-center gap-4 mx-12 lg:mx-16 flex-row ">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/199/199060.png"
              alt="Logo"
              className="w-12 h-12"
            />{" "}
          </Link>
          <h2 className="text-2xl font-bold text-blue-900 pb-1 hidden lg:block  ">
            King Wheel Stop{" "}
          </h2>
        </div>
        <div className="hidden sm:flex">
          <ul className="nav-links roboto flex items-center gap-10 mx-5 xl:mx-24 lg:mx-12">
            <li>
              <Link className="text-blue-900  font-semibold  " to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-blue-900  font-semibold  " to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-blue-900  font-semibold  " to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-blue-900  font-semibold  " to="/contact">
                Industries Servied
              </Link>
            </li>
            <li>
              <Link className="text-blue-900   font-semibold  " to="/contact">
                <Buttonnav   value=" Contact Now  " />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center sm:hidden gap-4 mx-12 lg:mx-16 flex-row">
          <i
            onClick={() => setMenu(!menu)}
            className="fa-solid fa-bars cursor-pointer text-yellow-500 text-2xl"
          ></i>
        </div>
      </nav>
      {/* mobile nav bar */}
      <div
        className={`fixed top-0 right-0 bottom-0 transition-all duration-300 h-screen bg-white z-20 ${
          menu ? "w-full" : "w-0"
        } overflow-hidden`}
      >
        <div className="flex gap-2 items-center">
          <i
            className="fa-solid fa-arrow-left text-xl text-yellow-600 hover:text-yellow-600 cursor-pointer p-4"
            onClick={() => setMenu(false)}
          ></i>
          <p
            onClick={() => setMenu(false)}
            className="cursor-pointer -ml-4 text-lg font-bold text-yellow-500 pb-1 hover:text-yellow-600"
          >
            Back
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <ul className="flex flex-col gap-4 justify-start items-start mx-8 mt-5 ">
            <li>
              <Link className="text-blue-900  font-semibold  transition-all duration-300 " to="/" onClick={()=>{setMenu(false)}} >
                Home
              </Link>
            </li>
            <hr className="w-full border-gray-300" />
            <li>
              <Link className="text-blue-900  font-semibold transition-all duration-300  " to="/about" onClick={()=>{setMenu(false)}} >
                About
              </Link>
            </li>
            <hr className="w-full border-gray-300" />
            <li>
              <Link className="text-blue-900  font-semibold  transition-all duration-300 " to="/services" onClick={()=>{setMenu(false)}} >
                Services
              </Link>
            </li>
            <hr className="w-full border-gray-300" />
            <li>
              <Link className="text-blue-900  font-semibold  transition-all duration-300 " to="/contact" onClick={()=>{setMenu(false)}} >
                Industries Servied
              </Link>
            </li>
            <hr className="w-full border-gray-300" />
            <li>
              <Link className="text-blue-900  font-semibold  transition-all duration-300 " to="/contact" onClick={()=>{setMenu(false)}} >
                Contact Now
              </Link>

            </li>
              <hr className="w-full border-gray-300" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
