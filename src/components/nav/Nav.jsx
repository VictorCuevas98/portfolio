import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiContactsBook2Line} from 'react-icons/ri'
import {MdWorkOutline} from 'react-icons/md'
import {BsChatLeftDots} from 'react-icons/bs'
import { useState } from 'react' 
import { gsap } from "gsap";
import { useEffect } from "react";
//state hook
const  Nav = () => {  
const [activeNav, setActiveNav] = useState('#')   
    return (    
        <nav>      
            <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}>
                <AiOutlineHome/>
            </a>      
            <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}>
                <AiOutlineUser/>
            </a>      
            <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}>
                <RiContactsBook2Line/>
            </a>      
            <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}>
                <MdWorkOutline/>
            </a>      
            <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}>
                <BsChatLeftDots/>
            </a>    
        </nav>  
    )
}
export default Nav