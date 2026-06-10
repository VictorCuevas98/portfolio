import ME from "../../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import "./me.css";

const Me = () => {
  return (
    <div className="me-container">
      <div className="me-container__ring" aria-hidden="true" />
      <div className="element-me element-me-2">
        <img src={ME} alt="Victor Cuevas" />
      </div>
      <div className="element-me element-me-1">
        <HeaderSocial />
      </div>
    </div>
  );
};

export default Me;
