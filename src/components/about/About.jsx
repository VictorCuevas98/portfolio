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
      <h5>{getTranslation("gtk")}</h5>
      <h2>{getTranslation("am")}</h2>
      <div className="container about__container">
        <dir className="about__me">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={image1}
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={image2}
                alt=""
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={image3}
                alt=""
              />
            </Carousel.Item>
          </Carousel>
          {/* <div className='about__me-image'>               
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index + 1}`} />        
                        ))}       
                    </div>                           */}
        </dir>
        <div className="about__content">
          <div>
            <div className="about__cards">
              <article className="about__card">
                <BiBookBookmark className="about__icon" />
                <h5>{getTranslation("ed")}</h5>
                <small>{getTranslation("ed_desc")}</small>
              </article>
              <article className="about__card">
                <MdWorkOutline className="about__icon" />
                <h5>{getTranslation("exp")}</h5>
                <small>{getTranslation("exp_desc")}</small>
              </article>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>{getTranslation("eng")}</h5>
                <small>
                  <a className="link" href={certificate} target="__blank">
                    {getTranslation("eng_desc")}
                  </a>
                </small>
              </article>
            </div>
            <p>
              {getTranslation("about_desc")}
            </p>
            <a href="#contact" className="btn btn-primary">
              {getTranslation("talk")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
