import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // For social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and Description */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-white">Asset Advisor</h2>
            <p className="text-gray-400 mt-2 max-w-xs">
              Your trusted partner in asset management and advisory services.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#home" className="hover:text-teal-400">
              Home
            </a>
            <a href="#about" className="hover:text-teal-400">
              About Us
            </a>
            <a href="#services" className="hover:text-teal-400">
              Services
            </a>
            <a href="#contact" className="hover:text-teal-400">
              Contact
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Asset Advisor. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
