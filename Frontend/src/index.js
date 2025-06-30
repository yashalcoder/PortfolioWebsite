import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ changed BrowserRouter to HashRouter
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contactus from "./Pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/servicespage" element={<Services />} />
      <Route path="/contact" element={<Contactus />} />
    </Routes>
    <Footer />
  </Router>
);

reportWebVitals();
