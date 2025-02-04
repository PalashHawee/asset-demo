import React, { useState } from "react";
import { Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { X } from "lucide-react"; // Importing the X icon

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <img
              src="/images/asset.png"
              alt="Company Logo"
              className="h-12 mb-4"
            />
            <ul>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("business")}
                  className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="block py-2 px-4 hover:text-yellow-500"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="text-gray-400">Phone: +8888888888</li>
              <li className="text-gray-400">
                Email: info@info@assetadvbd.com.com
              </li>
              <li className="text-gray-400">
                <h3 className="font-semibold">Corporate Office</h3>
                Address: X, Road Y, Dhaka-1212, Bangladesh
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-400 mb-4">
              Stay connected with us on social media:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Asset Advisors Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
