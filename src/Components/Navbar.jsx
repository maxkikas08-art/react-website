import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import blueLogo from "../assets/blue.png";
import darkmode from "../assets/bl.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate(); // added for navigation

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode, location]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", newValue);
      return newValue;
    });
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Navigate to characters page with search term in state
    if (value.trim() !== "") {
      navigate("/characters", { state: { searchTerm: value } });
    }
  };

  return (
    <nav className={`navbar ${darkMode ? "navbar-dark" : ""}`}>
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src={blueLogo} alt="Logo" />
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <ul className="navbar-links">
        <li>
          <button
            className="bl_pent_btn"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            <img src={darkmode} alt="Toggle Dark Mode" />
          </button>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/clips">Clips</Link>
        </li>
        <li>
          <Link to="/covers">Covers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
