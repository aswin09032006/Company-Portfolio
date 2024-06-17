import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./utils/navbar/navbar";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./utils/footer/footer";
import Development from "./components/service/development/development";
import Designing from "./components/service/graphicdesigning/designing";
// import CustomCursorTrail from "./utils/customCursor/cursor";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <CustomCursorTrail /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/graphic-designing" element={<Designing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
