import React from "react";
import "./footer.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      {" "}
      <a href="#" className="footer__logo">
        Web Developer
      </a>{" "}
      <ul className="permalinks">
        {" "}
        <li>
          <a href="#">Home</a>
        </li>{" "}
        <li>
          <a href="#">About</a>
        </li>{" "}
        <li>
          <a href="#">Experience</a>
        </li>{" "}
        <li>
          <a href="#">Portfolio</a>
        </li>{" "}
        <li>
          <a href="#">Contact</a>
        </li>{" "}
      </ul>{" "}
      <div className="footer__socials">
        {" "}
        <a href="https://github.com/VictorCuevas98">
          <BsGithub />
        </a>{" "}
        <a href="https://www.linkedin.com/in/victor-manuel-cuevas-gonzalez-00a05818a/">
          <BsLinkedin />
        </a>{" "}
      </div>{" "}
      <div className="footer__copyright">
        {" "}
        <small>
          Develop and designed by{" "}
          <a href="https://github.com/VictorCuevas98">Victor Cuevas</a>. © 2022
          All rights reserved
        </small>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;