import React, { useState } from "react";
import logo from "./images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#hero">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#testimonials"> Testimonials</a>
          </li>
          <li className="nav-item">
            <a href="#demo"> Demo</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
