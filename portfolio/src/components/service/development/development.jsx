import React, { useState } from "react";
import "./development.css";
import woman from "../../../assets/app_dev/static1.svg";
import plant from "../../../assets/app_dev/static2.svg";
import screen from "../../../assets/app_dev/static3.svg";
import motionImage from "../../../assets/app_dev/motion.svg";
import woman2 from "../../../assets/web_dev/static.png";
import motionImage2 from "../../../assets/web_dev/motion.png";
import { FaChevronRight } from "react-icons/fa6";

const Development = () => {
  const [is768, setIs768] = useState(window.innerWidth <= 768);
  return (
    <div className="our-service-container">
      <div className="our-service-header">
        <h3>DEVELOPMENT</h3>
        <p>
          We provide rich and Interactive experience by our Advanced Standards.
        </p>
      </div>
      <div className="app-develop-card">
        <div className="app-develop-image-container">
          <div className="box"></div>
          <img src={woman} alt="Woman" className="static1" />
          <img src={plant} alt="Plant" className="static2" />
          <img src={screen} alt="Plant" className="static3" />
          <img src={motionImage} alt="Motion" className="motion" />
        </div>
        <div className="app-develop-content">
          <h4>App Development</h4>
          <ul>
            <li>
              Our team comprises skilled developers well-versed in both Android
              and iOS platforms. We deliver apps that shine on every device.
            </li>
            <li>
              Our team leverages the unique features and capabilities of each
              platform to deliver seamless, high-performance applications.
            </li>
            <li>
              We specialize in crafting custom solutions tailored to your
              specific needs, ensuring your mobile app stands out in a crowded
              digital landscape.
            </li>
            <li>
              Looking for efficiency and cost-effectiveness? We offer
              cross-platform development solutions, ensuring your app works
              seamlessly across Android and iOS without compromising quality.
            </li>
          </ul>
          <p>
            <strong style={{ color: "#000" }}>Tools and Technologies:</strong>
          </p>
          <p>Flutter, React Native</p>
          <a
            href="mailto:weacttech@gmail.com"
            className="quote-link"
            target="_blank"
            rel="noopener noreferrer"
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

      <div className="web-develop-card">
        <div className="web-develop-content">
          <h4>Web Development</h4>
          <ul>
            <li>
              We specialize in turning concepts into cutting-edge digital
              solutions.
            </li>
            <li>
              Our commitment to responsive design ensures that your website
              looks stunning and functions flawlessly on devices of all sizes.
            </li>
            <li>
              We focus on optimizing your website for search engines, ensuring
              your business gets the attention it deserves.
            </li>
            <li>
              We implement industry-best practices, including SSL certificates
              and secure coding, to safeguard your website and protect user
              data.
            </li>
          </ul>
          <p>
            <strong>Tools and Technologies:</strong>
          </p>
          <p>React, Express.js, Node.js, MySQL & MongoDB</p>
          <a
            href="mailto:weacttech@gmail.com"
            className="quote-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Get a quote <FaChevronRight />
          </a>
        </div>
        <div className="web-develop-image-container">
          <div className="box"></div>
          <img src={woman2} alt="Woman" className="static" />
          <img src={motionImage2} alt="Motion" className="motion" />
        </div>
      </div>
    </div>
  );
};

export default Development;
