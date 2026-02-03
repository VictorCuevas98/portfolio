import React, { useRef } from "react";
import "./header.css";
import Animation from "../animation/Animation";
import Buttons from "./Buttons";
import Me from "./me/Me";

const Header = () => {
  return (
    <header>
      <div className="container pt-2">
        <div className="row gap-4">
          <Animation /> 
          <Buttons /> 
          <Me />
        </div>
      </div>
    </header>
  );
};
export default Header;
