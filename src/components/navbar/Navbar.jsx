import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../assets/logo.png"; // Import your logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const navRef = useRef(null); // Reference to the navbar for detecting outside clicks

  // Close the menu if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Scroll to section smoothly
      setIsMenuOpen(false); // Close menu on mobile after clicking
    }
  };

  return (
    <nav
      ref={navRef}
      className="w-full flex justify-between items-center py-4 px-6 text-white sticky top-0 z-50 bg-blue-800 shadow-md"
    >
      {/* Logo Section */}
      <div className="text-2xl font-bold flex items-center">
        <button
          onClick={() => scrollToSection("hero")} // Scroll to hero section when clicked
          className="flex items-center"
        >
          <img src={Logo} alt="Asset Advisor Logo" className="h-16 mr-2 w-16" />
          <span>
            <span className="text-gold-400">Asset</span>
            <span className="text-white ml-2">Advisors</span>
          </span>
        </button>
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
        className={`absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto bg-blue-800 md:bg-transparent z-40 md:flex md:space-x-6 text-sm uppercase font-semibold transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <button
            onClick={() => scrollToSection("hero")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            HOME
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            ABOUT US
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("ceo")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            MEET TEAM
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("business")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            SERVICES
          </button>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            GALLERY
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="block py-2 px-4 hover:text-gold-300 focus:outline-none"
          >
            CONTACT US
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
