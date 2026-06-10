import React from "react";
import "./portfolio.css";
import Mcm from "../../assets/portfolio/monitorecontrol.jpg";
import Saica from "../../assets/portfolio/saica.jpg";
import Zanate from "../../assets/portfolio/zanate.jpg";
import Infosys from "../../assets/portfolio/infosyslog.jpg";
import Autofin from "../../assets/portfolio/autofinlog.jpg";
import McmVideo from "../../assets/videos/videocontrol.mp4";
import { useLanguage } from "../../context/LanguageContext";
import { RiHome7Fill } from "react-icons/ri";

const data = [
  {
    id: 1,
    image: Infosys,
    title: "Senior Software Engineer",
    github: null,
    demo: null,
  },
  {
    id: 2,
    image: Autofin,
    title: "Full stack developer",
    github: null,
    demo: null,
  },
  {
    id: 3,
    image: Saica,
    title: "Full stack developer",
    github: "https://github.com/VictorCuevas98/saica",
    demo: "https://tics.finanzas.cdmx.gob.mx/saica/public/login",
  },
  {
    id: 4,
    image: Zanate,
    title: "Business website",
    github: "https://github.com/ZanateDesign/zanatedesign.github.io",
    demo: "https://zanatedesign.github.io",
  },
  {
    id: 5,
    image: Mcm,
    title: "University Project",
    github: "https://github.com/VictorCuevas98/controlmerma",
    demo: McmVideo,
  },
];
const Portfolio = () => {
  const { getTranslation } = useLanguage();
  return (
    <section id="portfolio">
      <h5>{getTranslation("my_recent_work")}</h5>
      <h2>{getTranslation("portfolio")}</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item container row">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h6 className="text-center">{title}</h6>
              <p></p>
              {(github || demo) && (
              <div className="container row text-center align-self-end justify-content-evenly">
                {github && (
                <div className="col-5">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                </div>
                )}

                {demo && (
                <div className="col-5">
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
                </div>
                )}
              </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
