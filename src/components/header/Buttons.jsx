import PDF from "../../assets/cv.pdf";
import { useLanguage } from "../../context/LanguageContext";

function Buttons() {
  const { getTranslation } = useLanguage();

  return (
    <div className="cv">
      {/* <a href={PDF} download className="btn btn-primary">
        {getTranslation("download_cv")}
      </a> */}
    </div>
  );
}

export default Buttons;
