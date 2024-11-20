import React from "react";
import Navbar from "../navbar/Navbar";
import Logo from "../../assets/logo.png";
import AboutUs from "./sections/About";
import CeosMessage from "./sections/Ceo";
import BusinessSectors from "./sections/Business";
import MediaCenter from "./sections/MediaCenter";
import PhotoGallery from "./sections/PhotoGallery";
import ContactUs from "./sections/Form";

const HeroSection = () => {
  return (
    <div className="relative text-black min-h-screen">
      {/* Hero Background */}
      <section id="hero">
        <div
          className="relative w-full h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero-banner.jpg')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-20"></div>

          {/* Navbar */}
          <Navbar />

          {/* Hero Content */}
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            {/* Logo with animation */}
            <div className="mb-6 animate-bounce">
              <img
                src={Logo}
                alt="Asset Advisor Logo"
                className="h-24 w-24 md:h-32 md:w-32"
              />
            </div>

            {/* Title and Subtitle */}
            <div className="flex flex-col items-center w-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-black">
                <span className="text-gold-400">Asset</span>{" "}
                <span className="text-white">Advisor</span>
              </h1>
              {/* <p className="text-xl md:text-2xl italic text-gray-500">
                ...changing the way of thinking
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div>
        <section id="about">
          <AboutUs />
        </section>
        <section id="ceo">
          <CeosMessage />
        </section>
        <section id="business">
          <BusinessSectors />
        </section>
        <section id="media-center">
          <MediaCenter />
        </section>
        <section id="gallery">
          <PhotoGallery/>
        </section>
        <section
          id="contact"
          
        >
          <ContactUs/>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
