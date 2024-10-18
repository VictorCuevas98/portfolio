import React from "react";
import PDF from "../../assets/cv.pdf";
import { useLanguage } from "../../context/LanguageContext";
function Buttons() {

  const { getTranslation } = useLanguage();

  return (
    <div className="cv">
      <a href={PDF} download className="btn">
        {getTranslation("downloadbtn")}
      </a>
      <a href="#contact" className="btn btn-primary">
        {getTranslation("talk")}
      </a>
    </div>
  );
};
export default Buttons;
