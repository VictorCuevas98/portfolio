import "./about.css";
import styles from "./About.module.css";
import image1 from "../../assets/aboutme/image1.jpg";
import image2 from "../../assets/aboutme/image2.jpg";
import image3 from "../../assets/aboutme/image3.jpg";
import certificate from "../../assets/aboutme/certiface_english.pdf";
import { FaAward } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";
import Carousel from "react-bootstrap/Carousel";

const About = () => {
  const { getTranslation } = useLanguage();

  return (
    <section id="about">
      <div className="container about__container">
        <dir className="about__me">
          <h5>{getTranslation("gtk")}</h5>
          <h2>{getTranslation("am")}</h2>
          <Carousel>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100 carousel-img" src={image1} alt="" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100 carousel-img" src={image2} alt="" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img className="d-block w-100 carousel-img" src={image3} alt="" />
            </Carousel.Item>
          </Carousel>
        </dir>
        <div className="about__content">
          <div>
            <div className="container text-center">
              <div className="row align-items-center">
                <div className="col">
                  <article className="about__card">
                    <BiBookBookmark className="about__icon" />
                    <h5>{getTranslation("ed")}</h5>
                  </article>
                </div>

                <div className="col">
                  <article className="about__card">
                    <MdWorkOutline className="about__icon" />
                    <h5>{getTranslation("exp")}</h5>
                  </article>
                </div>
                <div className="col">
                  <article className="about__card">
                    <FaAward className="about__icon" />
                    <a className="link" href={certificate} target="__blank">
                      <h5>{getTranslation("languages")}</h5>
                    </a>
                  </article>
                </div>
              </div>
            </div>
            <p>{getTranslation("about_desc")}</p>
            {/* <a href="#contact" className="btn btn-primary">
              {getTranslation("talk")}
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
