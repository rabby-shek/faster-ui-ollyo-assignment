import React, { useEffect, useState } from "react";
import BrandLogo from "../../assets/images/Logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header py-3 ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <img src={BrandLogo} alt="Logo" />
        </div>

        <nav className="nav">
          <ul className="nav-list d-flex mx-auto justify-content-center align-items-center list-unstyled mb-0">
            <li className="nav-item me-4">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item me-4">
              <a className="nav-link" href="/how-its-work">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-button-container">
          <button className="btn sign-in-btn me-2">Sign In</button>
          <button className="btn sign-up-btn">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
