import React, { useRef } from "react";
import "./header.css";
import Animation from "../animation/Animation";
import Buttons from "./Buttons";
import Me from "./me/Me";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Animation /> 
        <Buttons /> 
        <Me />
      </div>
    </header>
  );
};
export default Header;
