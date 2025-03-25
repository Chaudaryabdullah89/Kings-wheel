import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import Buttonnav from "./Buttonnav";
import AOS from 'aos';
import 'aos/dist/aos.css';
  
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);




  return (
    <div className="max-w-7xl mx-auto">
      <nav className=" backdrop-blur-lg shadow-md fixed top-0 left-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo and Brand */}
            <div className="flex items-center " data-aos="fade-right">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/199/199060.png"
                  alt="Logo"
                  className="w-10 h-10 transition-transform duration-300 hover:scale-110"
                />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent hidden lg:block">
                  King Wheel Stop
                </h2>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:block" style={{fontFamily: 'Karla'}} data-aos="fade-down">
              <div className="flex items-center space-x-8">
                <Link 
                  to="/"
                  className="text-blue-900 hover:text-yellow-500 transition-all duration-300 font-bold transition-colors duration-200"
                  data-aos="fade-down" 
                  data-aos-delay="100"
                >
                  Home
                </Link>
                <Link 
                  to="/about"
                  className="text-blue-900 hover:text-yellow-500 transition-all duration-300 font-bold transition-colors duration-200"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  About
                </Link>
                <Link 
                  to="/services"
                  className="text-blue-900 hover:text-yellow-500 transition-all duration-300 font-bold transition-colors duration-200"
                  data-aos="fade-down"
                  data-aos-delay="300"
                >
                  Services
                </Link>
                <Link 
                  to="/industriessurvied"
                  className="text-blue-900 hover:text-yellow-500 transition-all duration-300 font-bold transition-colors duration-200"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  Industries Served
                </Link>
                <Link 
                  to="/gallery"
                  className="text-blue-900 hover:text-yellow-500 transition-all duration-300 font-bold transition-colors duration-200"
                  data-aos="fade-down"
                  data-aos-delay="500"
                >
                  Gallery
                </Link>
                <Link 
                  to="/contact"
                  data-aos="fade-down"
                  data-aos-delay="500"
                >
         <Buttonnav value={"Contact Us"}  />
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setMenu(!menu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-blue-800 hover:bg-blue-100 transition-colors duration-200"
              >
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* mobile nav bar */}
      <div
        className={`fixed top-0 right-0 bottom-0 transition-all duration-300 h-screen bg-white z-20 ${
          menu ? "w-full" : "w-0" 
        } overflow-hidden shadow-2xl`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-100" data-aos="fade-down">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/199/199060.png" 
              alt="Logo"
              className="w-8 h-8"
            />
            <h2 className="text-lg font-bold text-blue-900">
              King Wheel Stop
            </h2>
          </div>
          <button
            onClick={() => setMenu(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <nav className="p-4">
          <ul className="flex flex-col gap-2">
            <li data-aos="fade-right" data-aos-delay="100">
              <Link 
                className="flex items-center gap-2 p-3 rounded-lg text-blue-900 font-semibold hover:bg-blue-50 transition-all duration-300" 
                to="/" 
                onClick={() => setMenu(false)}
              >
                <i className="fa-solid fa-home w-5 text-yellow-500 "></i>
                Home
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="200">
              <Link 
                className="flex items-center gap-2 p-3 rounded-lg text-blue-900 font-semibold hover:bg-blue-50 transition-all duration-300" 
                to="/about"
                onClick={() => setMenu(false)}
              >
                <i className="fa-solid fa-info-circle w-5 text-yellow-500 "></i>
                About
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="300">
              <Link 
                className="flex items-center gap-2 p-3 rounded-lg text-blue-900 font-semibold hover:bg-blue-50 transition-all duration-300" 
                to="/services"
                onClick={() => setMenu(false)}
              >
                <i className="fa-solid fa-cog w-5 text-yellow-500 "></i>
                Services
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="400">
              <Link 
                className="flex items-center gap-2 p-3 rounded-lg text-blue-900 font-semibold hover:bg-blue-50 transition-all duration-300" 
                to="/contact"
                onClick={() => setMenu(false)}
              >
                <i className="fa-solid fa-industry w-5 text-yellow-500 "></i>
                Industries Served
              </Link>
            </li>
            <li data-aos="fade-right" data-aos-delay="500">
              <Link 
                className="flex items-center gap-2 p-3 mt-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-all duration-300" 
                to="/contact"
                onClick={() => setMenu(false)}
              >
                <i className="fa-solid fa-phone w-5 text-yellow-500 "></i>
                Contact Now
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;