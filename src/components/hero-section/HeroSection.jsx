import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section text-center d-flex flex-column align-items-center justify-content-center">
      <div
        className="hero-section-text"
        data-aos="fade-up" // AOS animation added
        data-aos-duration="1000"
      >
        Awesome UI Dark Template for Webflow Agency
      </div>
      <button
        className="btn hero-section-btn"
        data-aos="zoom-in" // AOS animation added
        data-aos-duration="1200"
        data-aos-delay="300"
      >
        Get in Touch
      </button>
    </section>
  );
};

export default HeroSection;
