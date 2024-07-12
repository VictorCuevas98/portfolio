import React from "react";
import PDF from "../../assets/cv.pdf";
const CV = () => {
  return (
    <div className="cv">
      <a href={PDF} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};
export default CV;
