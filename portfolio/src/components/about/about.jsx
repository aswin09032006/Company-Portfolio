import React from "react";
import "./about.css";
import tm1 from "../../assets/parthiban.png";
import tm2 from "../../assets/bg.png";
import tm3 from "../../assets/bg.png";
import reactIcon from "../../assets/react.png";
import jsIcon from "../../assets/js.png";
import pythonIcon from "../../assets/python.png";
import expressIcon from "../../assets/express.png";
import mysqlIcon from "../../assets/mysql.png";
import mongodbIcon from "../../assets/mongodb.png";
import nodejsIcon from "../../assets/nodejs.png";
import flutterIcon from "../../assets/flutter.png";
import awsIcon from "../../assets/aws.png";
import figmaIcon from "../../assets/figma.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import tailwindIcon from "../../assets/tailwind.png";
import djangoIcon from "../../assets/django.png";
import { BsLinkedin } from "react-icons/bs";
const About = () => {
  const Card = ({ img, title }) => {
    return (
      <div className="card-container">
        <img src={img} className="card-image" />
        <p className="card-title">{title}</p>
      </div>
    );
  };
  return (
    <div className="about-container">
      <div className="learn-about-us-container">
        <h1 className="learn-about-us-header">Learn About Us.</h1>
        <p className="learn-about-us-content">
          WeAct Tech is a rapidly growing IT company , dedicated to serving
          clients locally and across India. Specializing in Software
          Development, and Website Design, we have become a trusted name in the
          local digital and web industry. Our services encompass a wide range of
          solutions including bespoke Software Products, Web Development, Mobile
          Apps, e-Commerce solutions, Domain & Web Hosting, Corporate Identity
          creation, Social Media Marketing, and Search Engine Optimization
          (SEO). At WeAct Tech, we are committed to delivering top-notch
          solutions tailored to meet the unique needs of businesses across the
          region. We're a team of dedicated experts who love creating new and
          exciting technology. Whether you're looking to establish a strong
          online presence, optimize business processes, or launch a new digital
          venture, we are here to partner with you every step of the way. Choose
          WeAct Tech for expert guidance and outstanding digital solutions
          designed to propel your business forward in the local market and
          beyond.
        </p>
      </div>
      <div className="learn-about-us-support-container">
        <div className="support-content-container">
          <h1 className="support-content-title">500+</h1>
          <p className="support-content-subtitle">Hours of Support</p>
        </div>
        <div className="support-content-container">
          <h1 className="support-content-title">10+</h1>
          <p className="support-content-subtitle">Projects</p>
        </div>
        <div className="support-content-container">
          <h1 className="support-content-title">2+</h1>
          <p className="support-content-subtitle">Happy Clients</p>
        </div>
      </div>
      <div className="team-members-container">
        <h1 className="team-members-title">Meet the Minds Behind WeAct Tech</h1>
        <div className="team-member-image-container">
          <div className="tm-image-container">
            <img src={""} alt="" className="team-member-image" />
            <h3>
              Aswin VK{" "}
              <a href="https://www.linkedin.com/in/vkaswin/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Developer</p>
          </div>
          <div className="tm-image-container">
            <img src={""} alt="" className="team-member-image" />
            <h3>
              Parthiban S{" "}
              <a href="https://www.linkedin.com/in/parthiban18/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Developer</p>
          </div>
          <div className="tm-image-container">
            <img src={""} alt="" className="team-member-image" />
            <h3>
              Aathini SS{" "}
              <a href="https://www.linkedin.com/in/vkaswin/">
                <BsLinkedin />
              </a>
            </h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="tm-image-container">
            <img src={""} alt="" className="team-member-image" />
            <h3>
              Manoj Aarya TSR{" "}
              <a href="https://www.linkedin.com/in/manojaarya-tsr-6120b8293/">
                <BsLinkedin />
              </a>
            </h3>
            <p>Graphic Designer</p>
          </div>
        </div>
      </div>
      <div className="tech-stacks-container">
        <h1 className="tech-stacks-title">Platforms We Utilize</h1>
        <div className="tech-stacks-card-container">
          <Card img={reactIcon} title="React" />
          <Card img={reactIcon} title="React Native" />
          <Card img={jsIcon} title="JS" />
          <Card img={pythonIcon} title="Python" />
          <Card img={expressIcon} title="Express" />
          <Card img={mysqlIcon} title="MySQL" />
          <Card img={mongodbIcon} title="MongoDB" />
          <Card img={nodejsIcon} title="Node JS" />
          <Card img={flutterIcon} title="Flutter" />
          <Card img={awsIcon} title="AWS" />
          <Card img={figmaIcon} title="Figma" />
          <Card img={bootstrapIcon} title="Bootstrap" />
          <Card img={htmlIcon} title="Html" />
          <Card img={cssIcon} title="Css" />
          <Card img={tailwindIcon} title="Tailwind Css" />
          <Card img={djangoIcon} title="Django" />
        </div>
      </div>
    </div>
  );
};

export default About;
