import React, { useRef } from "react";
import "./contact.css";
import contact_us from "../../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import swal from "sweetalert"; // Make sure to install and import SweetAlert

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j9vwz2b",
        "template_7o092th",
        form.current,
        "hGd_XgUJw-nJSGHuj"
      )
      .then(
        () => {
          swal("Success", "Your message has been sent!", "success");
          form.current.reset();
        },
        (error) => {
          swal(
            "Failed",
            "There was an error sending your message. Please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="contact-page-container">
      <div className="contact-container">
        <h2>Contact</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <i className="fas fa-clock"></i>
            <h3>Working hours</h3>
            <p>
              Monday - Sunday
              <br />
              9.30am - 11.30pm
            </p>
          </div>
          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>Phone numbers</h3>
            <p>
              93457 95447
              <br />
              93619 11221 <br />
              94885 12807
            </p>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email address</h3>
            <p>weacttech@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form-container">
        <div className="form-section">
          <h1>Get in touch</h1>
          <p>How we can help you? Please write down your query.</p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="Enter Your Name..."
                className="name"
                aria-label="Name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="from_mail"
                required
                placeholder="Enter Your Email..."
                className="email"
                aria-label="Email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="from_phone"
                required
                placeholder="Enter Your Phone..."
                className="phone"
                aria-label="Phone"
              />
            </div>
            <div className="input-group">
              <label htmlFor="website">Website (Optional)</label>
              <input
                type="url"
                id="website"
                name="from_website"
                placeholder="Website"
                className="website"
                aria-label="Website"
              />
            </div>
            <div className="input-group">
              <label htmlFor="message">Write your Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="image-section">
          <img src={contact_us} alt="Contact illustration" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
