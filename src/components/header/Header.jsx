import React, { useRef } from "react";
import "./header.css";
import Buttons from "./CV";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import Animation from "../animation/Animation";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Animation /> <Buttons /> 
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <HeaderSocial />
        {/*<ToggleSwitch label='Idioma'/>*/}
      </div>
    </header>
  );
};
export default Header;
