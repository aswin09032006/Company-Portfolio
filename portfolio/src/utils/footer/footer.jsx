import React, { useEffect } from "react";
import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-content-header">
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            WeAct Tech
          </a>
        </div>
        <div className="footer-content-company">
          <h2>Company</h2>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div className="footer-content-services">
          <h2>Services</h2>
          <a href="/services/graphic-designing">Designing</a>
          <a href="/services/development">Development</a>
        </div>
        <div className="footer-content-quick-links">
          <h2>Quick Links</h2>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-content-findus">
          <h2>Find us on</h2>
          <div className="footer-content-icons-container">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/weacttech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:weacttech@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiMail />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <footer>
        &copy; {new Date().getFullYear()}{" "}
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          WeAct Tech
        </a>
        . All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
