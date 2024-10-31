import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../o_2.png"; // Update the path to your logo

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        />
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/">FAQ's</Link> */}
        {/* Add About link */}
        <Link to="/contact">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;
