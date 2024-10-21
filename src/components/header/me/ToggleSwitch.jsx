import "./toggleSwitch.css";
import { useLanguage } from "../../../context/LanguageContext";

function ToggleSwitch (){

  const { language, handleLanguageChange, getTranslation } = useLanguage();

  return (
    <div className="switch-container">
      <label className="switch switch-cointainer-1">
        <input 
          type="radio" 
          id="spanish" 
          name="group" 
          value="es" 
          checked={language === 'es'}
          onChange={handleLanguageChange}  
        />
        <div>
          <span>{getTranslation("es")}</span>
        </div>
      </label>
      <label className="switch switch-cointainer-2">
        <input 
          type="radio" 
          id="english" 
          name="group" 
          value="en" 
          checked={language === 'en'}
          onChange={handleLanguageChange}
        />
        <div>
          <span>{getTranslation("en")}</span>
        </div>
      </label>
      <label className="switch switch-cointainer-3">
        <input 
        type="radio" 
        id="japanese" 
        name="group" 
        value="jp"
        checked={language === 'jp'}
        onChange={handleLanguageChange}
        />
        <div>
          <span>{getTranslation("jp")}</span>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
