import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./characters.css";

// Character imports
import aryu from "../assets/aryu.png";
import bachira from "../assets/bachira.png";
import barou from "../assets/barou.png";
import chigiri from "../assets/chigiri.png";
import gin from "../assets/gin.png";
import hiori from "../assets/hiori.png";
import igaguri from "../assets/igaguri.png";
import karasu from "../assets/karasu.png";
import kunigami from "../assets/kunigami.png";
import kurona from "../assets/kurona.png";
import nagi from "../assets/nagi.png";
import niko from "../assets/niko.png";
import otoya from "../assets/otoya.png";
import raichi from "../assets/raichi.png";
import reo from "../assets/reo.png";
import rin from "../assets/rin.png";
import shidou from "../assets/shidou.png";
import tokimitsu from "../assets/tokimitsu.png";
import yuki from "../assets/yuki.png";
import zantetsu from "../assets/zantetsu.png";

const characters = [
  { name: "Rin Itoshi", image: rin, bio: "A calm and precise striker with sharp tactical sense." },
  { name: "Meguru Bachira", image: bachira, bio: "Energetic and creative, loves dribbling and improvisation." },
  { name: "Shoei Barou", image: barou, bio: "Confident powerhouse with a dominating presence." },
  { name: "Hyoma Chigiri", image: chigiri, bio: "A fast and determined player who never gives up." },
  { name: "Seishiro Nagi", image: nagi, bio: "Naturally talented, makes difficult plays look effortless." },
  { name: "Jubei Aryu", image: aryu, bio: "Elegant and stylish, values beauty in both play and appearance." },
  { name: "Reo Mikage", image: reo, bio: "Strategic and ambitious, always supports his team efficiently." },
  { name: "Hiori Yo", image: hiori, bio: "Quiet yet sharp, uses intellect to outsmart his opponents." },
  { name: "Rensuke Kunigami", image: kunigami, bio: "Strong and straightforward with a heroic spirit." },
  { name: "Ikki Niko", image: niko, bio: "A smart reader of the field with tactical awareness." },
  { name: "Raichi Jingo", image: raichi, bio: "Passionate and fiery, always giving his all on the pitch." },
  { name: "Gin Gagamaru", image: gin, bio: "An agile and instinctive player, excels at reacting in chaos." },
  { name: "Zantetsu Tsurugi", image: zantetsu, bio: "Blazing fast and determined, though a bit scatterbrained." },
  { name: "Shoei Tokimitsu", image: tokimitsu, bio: "Anxious but powerful, channels fear into explosive strength." },
  { name: "Shido Ryusei", image: shidou, bio: "Unpredictable and wild, thrives in creative chaos." },
  { name: "Karasu Tabito", image: karasu, bio: "Clever and agile, uses cunning movements to deceive." },
  { name: "Kurona Ranze", image: kurona, bio: "Calm and precise, a perfect partner for Rin’s tactics." },
  { name: "Otoya Eita", image: otoya, bio: "Playful yet sly, loves to test limits on and off the field." },
  { name: "Yukimiya Kenyu", image: yuki, bio: "Stylish and confident, plays with flair and vision." },
  { name: "Igaguri", image: igaguri, bio: "Comic relief but determined to prove his worth." },
];

const Characters = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";

  // Only match full name
  const initialIndex = characters.findIndex(
    (char) => char.name.toLowerCase() === searchTerm.toLowerCase().trim()
  );

  const [index, setIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
  const [fade, setFade] = useState("fade-in");

  const charactersLength = characters.length;

  const changeCharacter = (newIndex) => {
    setFade("fade-out");
    setTimeout(() => {
      setIndex(newIndex);
      setFade("fade-in");
    }, 300);
  };

  const nextCharacter = () => changeCharacter((index + 1) % charactersLength);
  const prevCharacter = () => changeCharacter((index - 1 + charactersLength) % charactersLength);

  const { name, image, bio } = characters[index];

  const smallGroup = ["Nagi", "Chigiri", "Kurona"];
  const isBachira = name.includes("Bachira");
  const isSmall = smallGroup.some((n) => name.includes(n));

  return (
    <>
      <Navbar />
      <section className="characters-page">
        <div className="character-container">
          <button className="arrow left" onClick={prevCharacter}>
            &#8592;
          </button>

          <div className={`character-info ${fade}`} key={name}>
            <img
              src={image}
              alt={name}
              className={`character-image ${
                isBachira ? "bachira-small" : isSmall ? "small" : ""
              }`}
            />
            <div className="character-text">
              <h2>{name}</h2>
              <p>{bio}</p>
            </div>
          </div>

          <button className="arrow right" onClick={nextCharacter}>
            &#8594;
          </button>
        </div>
      </section>
    </>
  );
};

export default Characters;
