import React from "react";
import "./portfolio.css";
import Mcm from "../../assets/portfolio/monitorecontrol.jpg";
import Saica from "../../assets/portfolio/saica.jpg";
import Zanate from "../../assets/portfolio/zanate.jpg";
import Infosys from "../../assets/portfolio/infosyslog.jpg";
import Autofin from "../../assets/portfolio/autofinlog.jpg";
import McmVideo from "../../assets/videos/videocontrol.mp4";
import { useLanguage } from "../../context/LanguageContext";

const data = [
  {
    id: 1,
    image: Infosys,
    titleKey: "proj_infosys_title",
    positionKey: "proj_infosys_position",
    roleKey: "proj_infosys_role",
    github: null,
    demo: null,
  },
  {
    id: 2,
    image: Autofin,
    titleKey: "proj_autofin_title",
    positionKey: "proj_autofin_position",
    roleKey: "proj_autofin_role",
    github: null,
    demo: null,
  },
  {
    id: 3,
    image: Saica,
    titleKey: "proj_saica_title",
    positionKey: "proj_saica_position",
    roleKey: "proj_saica_role",
    github: "https://github.com/VictorCuevas98/saica",
    demo: "https://tics.finanzas.cdmx.gob.mx/saica/public/login",
  },
  {
    id: 4,
    image: Zanate,
    titleKey: "proj_zanate_title",
    positionKey: "proj_zanate_position",
    roleKey: "proj_zanate_role",
    github: "https://github.com/ZanateDesign/zanatedesign.github.io",
    demo: "https://zanatedesign.github.io",
  },
  {
    id: 5,
    image: Mcm,
    titleKey: "proj_mcm_title",
    positionKey: "proj_mcm_position",
    roleKey: "proj_mcm_role",
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
        {data.map(({ id, image, titleKey, positionKey, roleKey, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={getTranslation(titleKey)} />
            </div>
            <div className="portfolio__item-body">
              <h3>{getTranslation(titleKey)}</h3>
              <p className="portfolio__position">{getTranslation(positionKey)}</p>
              <p className="portfolio__role">{getTranslation(roleKey)}</p>
              {(github || demo) && (
                <div className="portfolio__item-actions">
                  {github && (
                    <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                      {getTranslation("github")}
                    </a>
                  )}
                  {demo && (
                    <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      {getTranslation("live_demo")}
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
