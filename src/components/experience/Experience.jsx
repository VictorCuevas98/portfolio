import React from "react";
import "./experience.css";
import Html from "../../assets/skillset/html.svg";
import Css from "../../assets/skillset/css.svg";
import Javascript from "../../assets/skillset/js.svg";
import Bootstrap from "../../assets/skillset/bootrstrap.svg";
import ReactImg from "../../assets/skillset/react.jpg";
import GsapImg from "../../assets/skillset/gsap.svg";
import Php from "../../assets/skillset/php.svg";
import Laravel from "../../assets/skillset/laravel.svg";
import Sqlserver from "../../assets/skillset/sqlserver.png";
import Java from "../../assets/skillset/java.png";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={Html} alt="" />
                </div>
                <h4>Html</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={Css} alt="" />
                </div>
                <h4>Css</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={Javascript} alt="" />
                </div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={Bootstrap} alt="" />
                </div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={ReactImg} alt="" />
                </div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={GsapImg} alt="" />
                </div>
                <h4>GSAP</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={Php} alt="" />
                </div>
                <h4>Php</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image">
                  <img src={Laravel} alt="" />
                </div>
                <h4>Laravel</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image bg-white">
                  <img src={Sqlserver} alt="" />
                </div>
                <h4>Sql Server</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <div className="experience_details-image bg-white">
                  <img src={Java} alt="" />
                </div>
                <h4>Java</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
