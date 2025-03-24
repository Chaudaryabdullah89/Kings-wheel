import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              King Wheel Stop
            </h3>
            <p className="text-gray-400 max-w-sm">
              Texas' premier manufacturer of high-quality concrete wheel stops. Built tough, delivered on time, installed right.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <i className="fas fa-home text-yellow-500 "></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <i className="fas fa-info-circle text-yellow-500 "></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <i className="fas fa-box text-yellow-500 "></i>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <i className="fas fa-images text-yellow-500 "></i>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors flex items-center gap-2">
                  <i className="fas fa-envelope text-yellow-500 "></i>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt mt-1 text-yellow-400"></i>
                <span className="text-gray-400">
                  123 Construction Way,<br />
                  Houston, TX 77001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-phone text-yellow-400"></i>
                <a href="tel:+1234567890" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <i className="fas fa-envelope text-yellow-400"></i>
                <a href="mailto:info@kingwheelstop.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  info@kingwheelstop.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} King Wheel Stop. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
