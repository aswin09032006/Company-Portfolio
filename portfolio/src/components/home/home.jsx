import React from "react";
import "./home.css";
import leftrock from "../../assets/rock1.png";
import rightrock from "../../assets/rock2.png";
import hand from "../../assets/hand.png";
import { IoCode } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import { PiPenNibLight } from "react-icons/pi";
import clock from "../../assets/wall-clock.png";
import chess from "../../assets/chess.png";
import chart from "../../assets/charts.png";
import goal from "../../assets/goal.png";
import minded from "../../assets/minded.png";
import how from "../../assets/how.png";
import { FiArrowUpRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-hero">
        <div className="home-page-hero-text">
          <p>
            WE DESIGN AND DEVELOP WEBSITES AND MOBILE APPS. AND WE DO IT WITH
            PASSION.
          </p>
          <h1>
            Exceptional <span className="design">design</span>{" "}
            <span className="powwwer">powwwer</span>.
          </h1>
        </div>
        <div className="home-page-hero-sub-text">
          Bringing your ideas to life with{" "}
          <span style={{ color: "black", fontWeight: "bold" }}>
            stunning designs and smooth animations.
          </span>
        </div>
        <div className="explore-projects-container">
          <a href="/portfolio" className="explore-projects-button">
            Explore Projects
          </a>
        </div>
        <div className="book-call">
          <a href="/contact">
            Shoot Us a Message <FiArrowUpRight />
          </a>
        </div>
        <div className="background-elements">
          <img src={leftrock} className="rock-left" />
          <img src={rightrock} className="rock-right" />
          <img src={hand} className="hand" />
          <div className="circle-yellow"></div>
          <div className="circle-white"></div>
        </div>
      </div>
      <div className="something-about-us-container">
        <h1>
          Something <span style={{ color: "black" }}>About Us</span>
        </h1>
        <div className="something-about-us-content">
          <p>
            We provide high-quality IT services using the latest technologies at
            affordable prices.
          </p>
          <p>
            Our goal is to help your business grow, whether you're just starting
            out or need support.
          </p>
          <p>
            We stay cool and composed, always ready to answer your queries and
            deliver excellent service.
          </p>
        </div>
      </div>
      <div className="what-we-do-container">
        <h1 className="what-we-do-header">What We Do</h1>
        <div className="what-we-do-card-container">
          <div className="what-we-do-card">
            <div className="what-we-do-card-icon">
              <IoCode />
            </div>
            <div className="what-we-do-card-title">Web Development</div>
            <button className="what-we-do-card-know-more">
              <a href="/services/development">Know More</a>
            </button>
          </div>
          <div className="what-we-do-card">
            <div className="what-we-do-card-icon">
              <CiMobile2 />
            </div>
            <div className="what-we-do-card-title">App Development</div>
            <button className="what-we-do-card-know-more">
              <a href="/services/development">Know More</a>
            </button>
          </div>
          <div className="what-we-do-card">
            <div className="what-we-do-card-icon">
              <PiPenNibLight />
            </div>
            <div className="what-we-do-card-title">Graphic Designing</div>
            <button className="what-we-do-card-know-more">
              <a href="/services/graphic-designing">Know More</a>
            </button>
          </div>
        </div>
      </div>
      <div className="how-we-are-container">
        <h1 className="how-we-are-header">How we Are</h1>
        <div className="how-we-are-content">
          <img src={how} alt="How we Are" className="how-we-are-image" />
          <div className="how-we-are-text">
            <div className="how-we-are-item">
              <img src={minded} alt="Like-minded Peers" />
              <p>Like-minded Peers</p>
            </div>
            <div className="how-we-are-item">
              <img src={clock} alt="Flexible Timings" />
              <p>Flexible Timings</p>
            </div>
            <div className="how-we-are-item">
              <img src={chess} alt="Relax Zone" />
              <p>Relax Zone</p>
            </div>
            <div className="how-we-are-item">
              <img src={chart} alt="High Potential for Career Growth" />
              <p>High Potential for Career Growth</p>
            </div>
            <div className="how-we-are-item">
              <img src={goal} alt="Hyper-Growth Mode" />
              <p>Hyper-Growth Mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
