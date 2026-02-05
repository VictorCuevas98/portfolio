import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import { PiTranslateBold } from "react-icons/pi";
import PopupLanguages from '../header/me/PopupLanguages'



import { useState } from 'react' 
//state hook
const  Nav = () => {  
const [activeNav, setActiveNav] = useState('#')   
const [popup, setShowPopup] = useState(false);
    return (    
            <nav>      
            <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}>
                <AiOutlineHome/>
            </a>      
            <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}>
                <AiOutlineUser/>
            </a>      
            <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}>
                <MdWorkOutline/>
            </a>      
            <a href="#trasnlate" className={activeNav === '#translate' ? 'active' : ''} onClick={() => setShowPopup(true)}>
                <PiTranslateBold/>
            </a>    
            <PopupLanguages
            show={popup}
            handleClose={() => setShowPopup(false)}        
        />
        </nav>  
    )
}
export default Nav