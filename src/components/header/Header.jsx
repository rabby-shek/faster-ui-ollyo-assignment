import React from "react";
import BrandLogo from "../../assets/images/Logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={BrandLogo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a className="nav-link" href="/home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/how-its-work">
              How Its Work
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
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
