import React from "react";
import "./header.css";
import Animation from "../animation/Animation";
import Buttons from "./Buttons";
import Me from "./me/Me";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const { getTranslation } = useLanguage();

  return (
    <header className="hero">
      <Animation />
      <div className="hero__content container">
        <Me />
        <div className="hero__text">
          <h1 className="hero__name">{getTranslation("hero_name")}</h1>
          <p className="hero__tagline">{getTranslation("hero_tagline")}</p>
          <Buttons />
        </div>
      </div>
    </header>
  );
};

export default Header;
