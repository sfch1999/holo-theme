import { Link } from "gatsby";
import React from "react";
import logo from "../images/3D-liquid-abstract-5.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink to-purple text-white py-10 mt-10 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            <img className="max-h-20 w-auto" src={logo} alt="Holo Logo" />
            <p className="text-sm opacity-80">
              A stunning and minimal personalized website starter theme built
              with Gatsby.
            </p>
            <p className="text-sm font-semibold mt-5">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:items-end">
            <ul className="text-md space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
            <div className="flex items-center space-x-4 mt-4">
              <a href="/" className="text-sm font-bold hover:underline">Holo</a>
              <a href="https://travislord.xyz" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">
                By TL
              </a>
              <a href="https://github.com/lilxyzz/holo-theme" target="_blank" rel="noopener noreferrer">
                <img className="w-5 h-5" src="/img/Github-Logo.png" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
