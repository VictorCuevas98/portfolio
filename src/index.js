import { render } from 'react-dom'
import App from './App'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import ReactGA from "react-ga4";


ReactGA.initialize("G-XTEC4ZCC5K");
ReactGA.send("pageview");
    render(<App/>, document.querySelector("#root"));