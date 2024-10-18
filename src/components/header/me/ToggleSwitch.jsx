import "./toggleSwitch.css";
import { useLanguage } from "../../../context/LanguageContext";

function ToggleSwitch (){

  const { language, handleLanguageChange } = useLanguage();

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
          <span>Spanish</span>
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
          <span>English</span>
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
          <span>日本語</span>
        </div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
