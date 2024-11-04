import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./workingon.css";
import Collapse from 'react-bootstrap/Collapse';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const data = [
    {
      title: "Title"   ,
      lastdateupdated: "2024-Nov-04",
      about: "About the project",
      github: "",
      demo: "",
    }
  ];

const Workingon = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log("Timeline item clicked");
  };
  return (
    <section id="workingon">
      <h5>What I've been working on</h5>
      <h2>Latetly</h2>
      <div className="container workingon__container">
        <Container fluid className="resume">
          <div className="resume-content">
            {/* Experience Section */}
            <div className="timeline">
              <div className="timeline-item">
                <h3>Lead UI Designer</h3>
                <p className="company">Big Design Company, NY, USA</p>
                <p className="description">
                  Sit cupiditate praesentium ex esse nulla facere fuga
                  perspicitatis eveniet providunt...
                </p>
                <a style={{cursor: "pointer"}} onClick={() => setOpen(!open)}>Click to see more</a>
              </div>
              <Collapse in={open} style={{height: "auto"}}>
                <div className="footer__socials" id="example-collapse-text">
                    {" "}
                    <a href="https://github.com/VictorCuevas98">
                    <BsGithub />
                    </a>{" "}
                    <a href="https://www.linkedin.com/in/victor-manuel-cuevas-gonzalez-00a05818a/">
                    <BsLinkedin />
                    </a>{" "}
                </div>
            </Collapse>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Workingon;
