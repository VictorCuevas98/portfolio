import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { PiTranslateBold } from "react-icons/pi";
import { RiProgress3Line } from "react-icons/ri";
import PopupLanguages from "../header/me/PopupLanguages";
import { useLanguage } from "../../context/LanguageContext";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [popup, setShowPopup] = useState(false);
  const { getTranslation } = useLanguage();

  return (
    <nav>
      <a
        href="#"
        title={getTranslation("nav_home")}
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title={getTranslation("nav_about")}
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        title={getTranslation("nav_portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <MdWorkOutline />
      </a>
      <a
        href="#workingon"
        title={getTranslation("nav_workingon")}
        className={activeNav === "#workingon" ? "active" : ""}
        onClick={() => setActiveNav("#workingon")}
      >
        <RiProgress3Line />
      </a>
      <a
        href="#translate"
        title={getTranslation("select_language")}
        className={activeNav === "#translate" ? "active" : ""}
        onClick={() => setShowPopup(true)}
      >
        <PiTranslateBold />
      </a>
      <PopupLanguages show={popup} handleClose={() => setShowPopup(false)} />
    </nav>
  );
};

export default Nav;
