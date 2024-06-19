import React, { useEffect, useState } from "react";
import "./navbar.css";
import { IoCallOutline } from "react-icons/io5";
import ProgressBar from "../progressbar/progressbar";
import { FaLaptopCode } from "react-icons/fa";
import { PiPenNibLight } from "react-icons/pi";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <div className="navbar-container">
      {/* Checkbox for sidebar toggle */}
      <input type="checkbox" id="sidebar-active" />

      {/* Logo and open sidebar button */}
      <h3 className="logo">
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          Company name
        </a>
      </h3>
      <label htmlFor="sidebar-active" className="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>

      {/* Overlay for sidebar */}
      <label htmlFor="sidebar-active" id="overlay"></label>

      {/* Sidebar links container */}
      <div className="navbar-links-container">
        <div className="navbar-links-header">
          {/* Company name in header */}
          <div className="company-name">
            <a href="/">Company Name</a>
          </div>
          {/* Close sidebar button */}
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </label>
        </div>

        {/* Navbar links */}
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <div className="dropdown">
            <p className="dropdown-toggle" onClick={toggleServices}>
              Services
            </p>
            <div
              className={`dropdown-content ${
                servicesOpen ? "dropdown-open" : ""
              }`}
            >
              <div className="nested-submenu">
                <a href="/services/development" className="submenu-item">
                  <FaLaptopCode />
                  Development
                </a>
              </div>
              <div className="nested-submenu">
                <a href="/services/graphic-designing" className="submenu-item">
                  <PiPenNibLight />
                  Graphic Designing
                </a>
              </div>
            </div>
          </div>
          <a
            href="/portfolio"
            className={`move-down ${servicesOpen ? "active" : ""}`}
          >
            Portfolio
          </a>
          <a
            href="/contact"
            className={`contact-button  ${servicesOpen ? "active" : ""}`}
          >
            Contact
          </a>
          <p
            className={`contact-button-detail ${servicesOpen ? "active" : ""}`}
          >
            companyname@gmail.com
          </p>
        </div>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default Navbar;
