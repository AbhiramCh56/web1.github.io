// src/App.jsx

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import Card from "./pages/Card";
import Header from "./components/Header";
import Tooltip from "./components/Tooltip";
import "./App.css";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ApplyClient from "./pages/ApplyClient";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotation = `rotate(${scrollPosition / 5}deg)`;

  return (
    <div className="App">
      <Header className="header" />
      <div
        className="background-image"
        style={{
          transform: `translate(-50%, -50%) ${rotation}`,
          height: "170%",
        }}
      ></div>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <div className="main-content">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply-client" element={<ApplyClient />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

function Home() {
  const scrollToOwners = () => {
    const element = document.getElementById("owner-info");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div className="main-text" data-aos="fade-up">
        <p>Drive sales</p>
        <p>through paid ads</p>
        <p>on social media</p>
      </div>
      <div className="main-under" data-aos="fade-up" data-aos-delay="200">
        <p>We bring customers to our clients through social media</p>
        <p>marketing with a breathtaking ROI.</p>
      </div>
      <Tooltip text="Apply to work with us">
        <Link to="/apply-client">
          <button className="button">Apply as a Client</button>
        </Link>
      </Tooltip>

      <div className="additional-text">
        <p>3.4M+ </p>
        <div>
          Average <br />
          Engagement
        </div>

        <p>| 4.2M+</p>
        <div>
          Average <br />
          Views
        </div>
        <p>| 120-140K </p>
        <div>
          Average <br />
          Story Views
        </div>
      </div>
    </main>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
