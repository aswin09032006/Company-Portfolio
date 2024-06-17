import React from "react";
import "./designing.css";
import woman from "../../../assets/designing/static.png";
import motionImage from "../../../assets/designing/motion.png";
import { FaChevronRight } from "react-icons/fa6";

const Designing = () => {
  return (
    <div className="design-page-container">
      <div className="our-service-header">
        <h3>GRAPHIC DESIGNING</h3>
        <p>
          Bringing your brand to life with custom, creative, and impactful
          graphic design solutions.
        </p>
      </div>
      <div className="graphic-design">
        <div className="graphic-design-image-container">
          <div className="box"></div>
          <img src={woman} alt="Woman" className="static" />
          <img src={motionImage} alt="Motion" className="motion" />
        </div>
        <div className="graphic-design-content">
          <h4>Graphic Designing</h4>
          <ul>
            <li>
              We're excited to announce the launch of our graphic design
              services, dedicated to bringing your brand's vision to life with
              creativity and precision.
            </li>
            <li>
              From logos to marketing materials, we specialize in crafting
              customized designs that reflect your brand's unique identity and
              message.
            </li>
            <li>
              Our team brings a fresh perspective and innovative ideas to every
              project, ensuring your designs stand out in the marketplace.
            </li>
            <li>
              Committed to excellence, we prioritize quality in every aspect of
              our work, using modern tools and techniques to deliver impactful
              designs.
            </li>
            <li>
              Ready to elevate your brand's visual presence? Contact us to
              discuss your design needs and receive a personalized quote.
            </li>
          </ul>
          <p>
            <strong style={{ color: "#000" }}>Tools and Technologies:</strong>
          </p>
          <p>Figma, Canva</p>
          <a
            href="/get-quote"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Get a quote <FaChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Designing;
