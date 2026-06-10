import "./about.css";
import image1 from "../../assets/aboutme/image1.jpg";
import image2 from "../../assets/aboutme/image2.jpg";
import image3 from "../../assets/aboutme/image3.jpg";
import certificate from "../../assets/aboutme/certiface_english.pdf";
import { FaAward } from "react-icons/fa";
import { BiBookBookmark } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";
import Carousel from "react-bootstrap/Carousel";

const STORY_KEYS = ["story_1", "story_2", "story_3"];
const STORY_IMAGES = [image1, image2, image3];

const About = () => {
  const { getTranslation } = useLanguage();

  const highlights = [
    { icon: BiBookBookmark, label: "ed", desc: "ed_desc" },
    { icon: MdWorkOutline, label: "exp", desc: "exp_desc" },
    { icon: MdLanguage, label: "languages", desc: "lang_desc", link: certificate },
  ];

  return (
    <section id="about">
      <h5>{getTranslation("gtk")}</h5>
      <h2>{getTranslation("am")}</h2>

      <div className="container about__container">
        <div className="about__story">
          <Carousel fade interval={6000} indicators className="story-carousel">
            {STORY_IMAGES.map((img, index) => (
              <Carousel.Item key={index} className="story-carousel__item">
                <img
                  className="story-carousel__img"
                  src={img}
                  alt={getTranslation(STORY_KEYS[index])}
                />
                <div className="story-carousel__caption">
                  <p>{getTranslation(STORY_KEYS[index])}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="about__content">
          <p className="about__bio">{getTranslation("about_desc")}</p>

          <div className="about__highlights">
            {highlights.map(({ icon: Icon, label, desc, link }) => (
              <div key={label} className="about__highlight">
                <Icon className="about__highlight-icon" />
                <div className="about__highlight-text">
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="about__highlight-label link">
                      {getTranslation(label)}
                    </a>
                  ) : (
                    <span className="about__highlight-label">{getTranslation(label)}</span>
                  )}
                  <small>{getTranslation(desc)}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
