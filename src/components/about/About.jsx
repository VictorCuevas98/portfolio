import React, { useEffect } from 'react'
import './about.css'
import DESKTOP from '../../assets/aboutme/desktop1.jpeg'
import imagen1 from '../../assets/aboutme/imagen1.jpeg'
import imagen2 from '../../assets/aboutme/imagen2.jpg'
import certificate from '../../assets/aboutme/certiface_english.pdf'
import {FaAward} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {MdWorkOutline} from 'react-icons/md'
import { gsap } from "gsap"
import gsapCore from 'gsap/gsap-core'

const About = () => {  
    // wait until DOM has been rendered  
    useEffect(() => {    
        let count = 0;    
        const targets = document.querySelectorAll(".about__me-image");    
        gsap.set(targets, { xPercent:100 });    
        gsap.set(targets[0], { xPercent: 0 });    
        // next button    
        function slideOneNext(){      
            gsap.fromTo(targets[count], { xPercent:0, zIndex:0}, {delay:0.2, duration:1.2, xPercent:0, zIndex:-10});      
            count = count < targets.length - 1 ? ++count : 0;      
            gsap.fromTo(targets[count], { xPercent:100, zIndex:10}, {duration:1.2, xPercent:0, zIndex:0});    
        }    
        const nextBtn = document.getElementById("nextButton");    
        nextBtn.addEventListener("click", function(){      
            slideOneNext();    
        });    
        // Previous button    
        function slideOnePrev() {      
            gsap.fromTo(targets[count], { xPercent: 0, zIndex: 10 }, {xPercent: 0, zIndex: 0 });      
            gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0, duration: 1.2, xPercent: 100, zIndex: -10 });      
            count = count < targets.length ? --count : 0;    
        }    
        const prevBtn = document.querySelector("#prevButton");    
        prevBtn.addEventListener("click", function(){      
            slideOnePrev();    
        });           
    });  
    return (    
        <section id='about'>      
            <h5>Get To Know</h5>      
            <h2>About Me</h2>      
            <div className="container about__container">        
                <dir className="about__me">          
                    <div className='about__me-image'>            
                        <img src={DESKTOP} alt="" />          
                    </div>          
                    <div className='about__me-image'>            
                        <img src={imagen1} alt="" />          
                    </div>          
                    <div className='about__me-image'>            
                        <img src={imagen2} alt="" />          
                    </div>                    
                    <div className='controls'>            
                        <span id='prevButton'>Prev</span>            
                        <span id='nextButton'>Next</span>          
                    </div>        
                </dir>                
                <div className='about__content'>          
                    <div className="about__cards">            
                        <article className='about__card'>              
                            <BiBookBookmark className='about__icon'/>              
                            <h5>Education</h5>              
                            <small>Bechalor's Computer Systems</small>            
                        </article>            
                        <article className='about__card'>              
                            <MdWorkOutline className='about__icon'/>              
                            <h5>Experience</h5>              
                            <small>4+ experience years</small>            
                        </article>            
                        <article className='about__card'>              
                            <FaAward className='about__icon'/>              
                            <h5>English Advance</h5>              
                            <small><a className='link' href={certificate} target="__blank">Certificate of Level</a></small>            
                        </article>          
                    </div>          
                    <p>            
                        Developer full time, excited about tecnology and passionate to create new projects chanllenging.             
                        I'm always find myself learning something by my own, enjoying the proccess of improvment.            
                    </p>                    
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>        
                </div>      
            </div>    
        </section>  
    )}
    export default About