import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./utils/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./utils/footer/footer";
import Development from "./components/service/development/development";
import Designing from "./components/service/graphicdesigning/designing";
import Portfolio from "./components/portfolio/portfolio";
// import CustomCursorTrail from "./utils/customCursor/cursor";

const App = () => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleOffline = () => {
      setStatus("You are offline");
      setMessage("Please check your internet connection");
    };

    // Check initial online status
    if (!navigator.onLine) {
      handleOffline();
    }

    // Listen for offline events
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {status && (
          <div className="container">
            <div className="status">{status}</div>
            <div className="message">{message}</div>
          </div>
        )}
        {status ? null : (
          <>
            <Navbar />
            {/* <CustomCursorTrail /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/development" element={<Development />} />
              <Route
                path="/services/graphic-designing"
                element={<Designing />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
