import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to section smoothly
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-6 text-white sticky top-0 z-50 bg-blue-800 shadow-md">
      {/* Logo Section */}
      <div className="text-2xl font-bold flex items-center">
        <img src={Logo} alt="Asset Advisor Logo" className="h-20 mr-2 w-20" />
        <span>
          <span className="text-gold-400">Asset</span>

          <span className="text-white ml-2">Advisor</span>
        </span>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle the menu on click
        className="md:hidden block text-3xl focus:outline-none"
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-6 text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <li>
          <button
            onClick={() => scrollToSection("hero")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            Who We Are
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("ceo")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            CEO Message
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("business")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            Business Sectors
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("media-center")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            Media Center
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            Gallery
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
      </ul>
    </nav>
  );
};

export default Navbar;
