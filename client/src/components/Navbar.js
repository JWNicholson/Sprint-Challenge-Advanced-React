import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import './NavBar.css';

const Navbar = (key, initialValue) => {
  const [darkMode, setDarkMode] = useDarkMode(key, initialValue);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup Soccer Most Search Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;