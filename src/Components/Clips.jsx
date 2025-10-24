import React from "react";
import Navbar from "./Navbar.jsx";
import "./Home.css"; // reuse existing styles

const Clips = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Clips Page</h1>
        <p>Here you can watch all the clips.</p>
      </section>
    </>
  );
};

export default Clips;
