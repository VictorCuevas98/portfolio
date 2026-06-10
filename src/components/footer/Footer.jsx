import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { getTranslation } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer>
      <a href="#" className="footer__logo">
        {getTranslation("footer_tagline")}
      </a>
      <ul className="permalinks">
        <li><a href="#">{getTranslation("footer_home")}</a></li>
        <li><a href="#about">{getTranslation("footer_about")}</a></li>
        <li><a href="#portfolio">{getTranslation("footer_portfolio")}</a></li>
        <li><a href="#workingon">{getTranslation("footer_workingon")}</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/VictorCuevas98" target="_blank" rel="noopener noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-manuel-cuevas-gonzalez-00a05818a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>
          {getTranslation("footer_copyright")}{" "}
          <a href="https://github.com/VictorCuevas98">Victor Cuevas</a>. © {year}{" "}
          {getTranslation("footer_rights")}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
