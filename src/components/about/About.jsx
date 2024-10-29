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

const images = [image1, image2, image3];

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
                <h5>Education</h5>
                <small>Bechalor's Computer Systems</small>
              </article>
              <article className="about__card">
                <MdWorkOutline className="about__icon" />
                <h5>Experience</h5>
                <small>4+ experience years</small>
              </article>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>English Advance</h5>
                <small>
                  <a className="link" href={certificate} target="__blank">
                    Certificate of Level
                  </a>
                </small>
              </article>
            </div>
            <p>
              Developer full time, excited about tecnology and passionate to
              create new projects chanllenging. I'm always find myself learning
              something by my own, enjoying the proccess of improvment.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
