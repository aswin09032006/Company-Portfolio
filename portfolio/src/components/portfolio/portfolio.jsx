import React from "react";
import modern from "../../assets/ac.png";
import kannan from "../../assets/camera.png";
import cycle from "../../assets/cycle.png";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Our Works</h1>
      <div className="portfolio-website-containter">
        <div className="portfolio-card">
          <a href="https://modern-cooler.vercel.app/">
            <img
              src={modern}
              alt="Modern Coolers"
              className="website_template"
            />
          </a>
          <div className="portfolio-card-text">
            <h2>Modern Coolers</h2>
          </div>
        </div>
        <div className="portfolio-card">
          <a href="https://kannan-studio-salem.vercel.app/">
            <img
              src={kannan}
              alt="Kannan Studio Salem"
              className="website_template"
            />
          </a>
          <div className="portfolio-card-text">
            <h2>Kannan Studio Salem</h2>
          </div>
        </div>
        <div className="portfolio-card">
          <a href="https://ride-axis.vercel.app/">
            <img src={cycle} alt="RideAxis" className="website_template" />
          </a>
          <div className="portfolio-card-text">
            <h2>RideAxis</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
