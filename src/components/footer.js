import { Link } from "gatsby";
import React from "react";
import logo from "../images/3D-liquid-abstract-5.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10 rounded-t-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img className="max-h-16 w-auto mb-4" src={logo} alt="Holo Logo" />
            <p className="text-sm opacity-80">
              At ABI AI, we bring cutting-edge artificial intelligence solutions to businesses
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><a href="https://github.com/lilxyzz/holo-theme" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img className="w-5 h-5" src="/img/linkedin-icon.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/lilxyzz/holo-theme" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                <img className="w-5 h-5" src="/img/Github-Logo.png" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-gray-400 text-center">
          &copy; {new Date().getFullYear()} Holo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
