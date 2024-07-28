import React, { useEffect, useState } from "react";
import { IoCloudOffline } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";
import Development from "./components/service/development/development";
import Designing from "./components/service/graphicdesigning/designing";
import Footer from "./utils/footer/footer";
import Loader from "./utils/loader/loader";
import Navbar from "./utils/navbar/navbar";

const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineMessage, setOfflineMessage] = useState({
    status: "Connection Lost",
    message:
      "It looks like you're not connected to the internet. Please check your connection and try again.",
  });
  const [loading, setLoading] = useState(true); // State to manage page loading

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

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false); // Simulate loading complete after 1.5 seconds
    }, 1500);

    return () => clearTimeout(delay);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {loading && <Loader />} {/* Display loader while loading */}
        {!isOnline && !loading && (
          <div className="container">
            <IoCloudOffline style={{ fontSize: "10vh" }} />
            <h1 className="status">{offlineMessage.status}</h1>
            <p className="message">{offlineMessage.message}</p>
            <button className="retry-button" onClick={handleRetry}>
              Try Again
            </button>
          </div>
        )}
        {isOnline && !loading && (
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
