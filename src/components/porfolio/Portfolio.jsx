import React from "react";
import "./portfolio.css";
import Mcm from "../../assets/portfolio/monitorecontrol.jpg";
import Saica from "../../assets/portfolio/saica.jpg";
import Zanate from "../../assets/portfolio/zanate.jpg";
import McmVideo from "../../assets/videos/videocontrol.mp4";
const data = [
  {
    id: 1,
    image: Mcm,
    title: "Infosys Experience and Trainings code",
    github: "https://github.com/VictorCuevas98/controlmerma"
  },
  {
    id: 2,
    image: Saica,
    title: "Sistema de Abasto, Inventario y Control de Almacenes",
    github: "https://github.com/VictorCuevas98/saica",
    demo: "https://tics.finanzas.cdmx.gob.mx/saica/public/login",
  },
  {
    id: 3,
    image: Zanate,
    title: "Pagina web empresarial",
    github: "https://github.com/ZanateDesign/zanatedesign.github.io",
    demo: "https://zanatedesign.github.io",
  },
  {
    id: 4,
    image: Mcm,
    title: "University Project",
    github: "https://github.com/VictorCuevas98/controlmerma",
    demo: McmVideo,
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-btn">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
