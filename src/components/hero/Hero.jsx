import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import AboutUs from "./sections/About";
import CeosMessage from "./sections/Ceo";
import BusinessSectors from "./sections/Business";
import MediaCenter from "./sections/MediaCenter";
import PhotoGallery from "./sections/PhotoGallery";
import ContactUs from "./sections/Form";
import MeetTheTeam from "./sections/Ceo";
import Contact from "./sections/Form";

const HeroSection = () => {
  const words = ["Promising", "Affluence", "Assurance"]; // Words to animate
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // Track the current word
  const [displayedText, setDisplayedText] = useState(""); // Text being displayed
  const [isDeleting, setIsDeleting] = useState(false); // Typing or deleting state

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100; // Typing and deleting speed
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === word) {
        // Pause before starting to delete
        setIsDeleting(true);
        setTimeout(() => {}, 1000);
      } else if (isDeleting && displayedText === "") {
        // Move to the next word
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      } else {
        // Update the displayed text
        const newText = isDeleting
          ? word.substring(0, displayedText.length - 1)
          : word.substring(0, displayedText.length + 1);
        setDisplayedText(newText);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div className="relative text-black min-h-screen">
      <Navbar />
      {/* Hero Background */}
      <section id="hero">
        <div
          className="relative w-full h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url('/images/nature.jpg')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>

          {/* Navbar */}

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            {/* Typing Animation */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              {displayedText}
              <span className="text-gold-400">|</span> {/* Cursor effect */}
            </h1>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div>
        <section id="about">
          <AboutUs />
        </section>
        <section id="ceo">
          <MeetTheTeam />
        </section>
        <section id="business">
          <BusinessSectors />
        </section>
        {/* <section id="media-center">
          <MediaCenter />
        </section> */}
        <section id="gallery">
          <PhotoGallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
