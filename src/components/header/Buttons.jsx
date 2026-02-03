import PDF from "../../assets/cv.pdf";

function Buttons() {

  return (
    <div className="cv">
      <a href={PDF} download className="btn">
        Download CV (EN)
      </a>

      <a href={PDF} download className="btn">
        履歴書をダウンロード (JP)
      </a>

      <a href={PDF} download className="btn">
        Descargar CV (ES)
      </a>
    </div>
  );
};
export default Buttons;
