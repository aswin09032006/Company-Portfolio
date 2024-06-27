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
import { IoCloudOffline } from "react-icons/io5";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineMessage, setOfflineMessage] = useState({
    status: "Connection Lost",
    message:
      "It looks like you're not connected to the internet. Please check your connection and try again.",
  });

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
    };

    const handleOnline = () => {
      setIsOnline(true);
    };

    // Check initial online status
    if (!navigator.onLine) {
      handleOffline();
    }

    // Listen for online and offline events
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  const handleRetry = () => {
    setIsOnline(false);
    setTimeout(() => {
      setIsOnline(navigator.onLine);
    }, 5000); // retry after 5 seconds
  };

  return (
    <BrowserRouter>
      <div className="App">
        {!isOnline && (
          <div className="container">
            <IoCloudOffline style={{ fontSize: "10vh" }} />
            <h1 className="status">{offlineMessage.status}</h1>
            <p className="message">{offlineMessage.message}</p>
            <button className="retry-button" onClick={handleRetry}>
              Try Again
            </button>
          </div>
        )}

        {isOnline && (
          <>
            <Navbar />
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
