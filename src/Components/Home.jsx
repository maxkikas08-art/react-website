import React from "react";
import Navbar from "./Navbar.jsx";
import "./Home.css";
import playersImage from "../assets/players.png";

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section: Image + Text Side by Side */}
      <div className="hero-section">
        <img
          src={playersImage}
          alt="Blue Lock Players"
          className="hero-image"
        />

        <div className="hero-text">
          <h2>BLUE LOCK Project</h2>
          <p>
            In order to develop the world's best striker to lead Japan to the World Cup championship, the Japan Football Union has launched the "BLUE LOCK" project.
          </p>
          <p>
            Three hundred high school students were invited to participate in the project. They were all forwards.
          </p>
          <p>
            Under the extreme condition that if they are eliminated from the team, they will lose their qualification to ever play for the Japanese national soccer team, the selected talents awaken their egos as strikers one after another.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
