import React from "react";
import BrandLogo from "../../assets/images/Logo.png";
import { CiHeart } from "react-icons/ci";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaDribbble,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="container footer">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="col-12">
            <img src={BrandLogo} alt="Brand Logo" />
          </div>
          <div className="col-12">
            <p>
              Ready to elevate your online presence? Contact us today to discuss
              your project and discover how we can bring your vision to life.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href="/home" className="footer-nav-link">
                Home
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="/home" className="footer-nav-link">
                About
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="/home" className="footer-nav-link">
                How It Works
              </a>
            </li>
            <li className="footer-nav-item">
              <a href="/home" className="footer-nav-link">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <CiHeart className="me-2" />
          Made with love powered by inkyy.com
        </div>
        <div className="col-lg-6 col-sm-6">
          <ul className="footer-social-links">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaTiktok />
            </li>
            <li>
              <FaDribbble />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
