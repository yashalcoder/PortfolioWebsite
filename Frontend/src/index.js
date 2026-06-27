import React from "react";
import ReactDOM from "react-dom/client";

// Silence ResizeObserver loop errors in the browser
window.addEventListener('error', e => {
  if (e.message && (
    e.message.includes('ResizeObserver') ||
    e.message.includes('ResizeObserver loop limit exceeded') ||
    e.message.includes('ResizeObserver loop completed with undelivered notifications')
  )) {
    const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
    const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay');
    if (resizeObserverErrDiv) resizeObserverErrDiv.setAttribute('style', 'display: none');
    if (resizeObserverErr) resizeObserverErr.setAttribute('style', 'display: none');
    e.stopImmediatePropagation();
    e.preventDefault();
  }
});

import "./index.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ changed BrowserRouter to HashRouter
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Work from "./Pages/Work"
import Contactus from "./Pages/Contact";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Toaster 
      position="top-right" 
      toastOptions={{
        className: 'dark:bg-slate-900 dark:text-white bg-white text-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg font-sans text-sm',
        duration: 3500,
      }} 
    />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/servicespage" element={<Services />} />
      <Route path="/contact" element={<Contactus />} />
      <Route path="/work" element={<Work/>}></Route>
    </Routes>
    <Footer />
  </Router>
);

reportWebVitals();
