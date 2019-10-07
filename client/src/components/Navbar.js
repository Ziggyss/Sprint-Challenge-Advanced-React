import React, { useState, useEffect } from "react";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Player Data</h1>
      <div className="dark-mode-toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        > Toggle Dark Mode </button>
      </div>
    </nav>
  );
};

export default Navbar;
