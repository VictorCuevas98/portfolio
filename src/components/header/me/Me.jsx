import ME from "../../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import ToggleSwitch from "./ToggleSwitch";
import "./me.css";

const Me = () => {

  return (
    <div className="me-container">
      <div className="element-me element-me-1">
        <HeaderSocial/>
      </div>
      <div className="element-me element-me-2">
        <img src={ME} alt="me" />
      </div>
      <div className="element-me element-me-3">
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Me;
