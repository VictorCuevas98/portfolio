import React, { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect } from "react";
import "./animation.css";
const Animation = () => {
  // store a reference to the box div
  const boxRef = useRef();
  // wait until DOM has been rendered
  useEffect(() => {
    var width = 390;
    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        width = 250;
        console.log("width 800px");
      } else {
        width = 390;
        console.log("width +800px");
      }
    }
    var x = window.matchMedia("(max-width: 800px)");
    myFunction(x);
    // Call listener function at run time
    //x.addListener(myFunction)
    // Attach listener function on state changes
    //my first code line with gsap in React
    //gsap.to(boxRef.current, { rotation: \"+=360\" });
    gsap.registerPlugin(TextPlugin);
    //this is to show the pen
    gsap.set(".cls-1", { visibility: "visible" });
    gsap.set(".cls-2", { visibility: "visible" });
    gsap.from(".pen", { duration: 3, opacity: 0 });
    //gsap.set(\"body\", { visibility: \"visible\" });
    //gsap.set(\"body\", { duration: 5, opacity: 0 });
    gsap.to(".pen2", {
      duration: 3,
      x: 1000,
      opacity: 0,
      ease: "slow (0.3, 2, false)",
      delay: 3,
    });
    gsap.to(".pen1", {
      duration: 3,
      x: -1000,
      opacity: 0,
      ease: "slow (0.1, 0.1, false)",
      delay: 3,
    });
    gsap.to(".text1", { duration: 1, text: "Hello", delay: 3 });
    gsap.to(".text2", { duration: 1, text: "I'm Victor", delay: 4 });
    gsap.from(".text1", { duration: 2, y: width, ease: "slow", delay: 5 });
    gsap.from(".text2", { duration: 2, y: width, ease: "slow", delay: 5 });
    /*gsap.to(".container__animation", {
      backgroundColor: "transparent",
      delay: 5,
    });*/
    gsap.to(".container__animation", { duration:2, height: "auto", delay: 5 });
    gsap.to(".container__animation", { position: "absolute", delay: 7 });
    gsap.to("#root", { position: "relative", delay: 7 });
    // gsap.to("nav", { display: "flex", delay: 7 });
    //TweenLite.to(\"#redBox\", 2, {backgroundColor:\"rgba(255, 0, 0, 0.2)\", rotation:45, delay:0.5})
    const lt = gsap.timeline({ repeat: 10, repeatDelay: 2, delay: 7 });
    lt.to(".text1", { duration: 2, text: "|" })
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 2, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 2, text: "Bonjour" })
      .to(".text2", { duration: 2, text: "Je m'appelle Victor" })
      .to(".text1", { duration: 2, text: "|" })
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 2, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 2, text: "こんにちは" })
      .to(".text2", { duration: 2, text: "私は ビクター です" })
      .to(".text1", { duration: 2, text: "|" })
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 2, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 2, text: "Hola" })
      .to(".text2", { duration: 2, text: "Me llamo Victor" })
      .to(".text1", { duration: 2, text: "|" })
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 2, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 2, text: "Hello" })
      .to(".text2", { duration: 2, text: "I'm Victor" });
    //.to(\"#text1\",{duration:3, text: \"Victor Cuevas\"});
  });
  return (
    <div className="container__animation">
      <div className="pen">
        <div className="pen1">
          <p class="t2">texto</p>
          <svg
            id="svg1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.69 20"
          >
            <title>pluma punta</title>
            <path
              className="cls-1"
              d="M114,31.51l-37.25.63C58.5,32.76,44,33.51,44,33.51v15C56.79,49.17,76,50,93.21,50.26l20.75.25"
              transform="translate(-7.35 -31.01)"
            />
            <path
              className="cls-1"
              d="M113.93,37.51h-66v-2l66.1-.73"
              transform="translate(-7.35 -31.01)"
            />
            <path
              className="cls-1"
              d="M42,33.51v15s-26-2-29-6v-3S18,35.51,42,33.51Z"
              transform="translate(-7.35 -31.01)"
            />
            <path
              className="cls-1"
              d="M16,41.51H40v5s-16,0-24-4Z"
              transform="translate(-7.35 -31.01)"
            />
            <path
              className="cls-1"
              d="M11,39.51V42S4,41.18,11,39.51Z"
              transform="translate(-7.35 -31.01)"
            />
          </svg>
        </div>
        <div className="pen2">
          <p class="t3">texto</p>
          <svg
            id="svg2"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.5 32.02"
          >
            <title>Pluma 2</title>
            <path
              className="cls-2"
              d="M1,31.51H19v19H0"
              transform="translate(0.04 -18.98)"
            />
            <path
              className="cls-2"
              d="M21,31.51v19H91a2.94,2.94,0,0,0,3-2.88V34.51s0-3-4-3Z"
              transform="translate(0.04 -18.98)"
            />
            <path
              className="cls-2"
              d="M23,34.51v3H90s1-3-2-3Z"
              transform="translate(0.04 -18.98)"
            />
            <path
              className="cls-2"
              d="M.5,34.72,17,34.51v3H.23"
              transform="translate(0.04 -18.98)"
            />
            <path
              className="cls-2"
              d="M96,35.51v12h8s2,0,2-3v-7a2,2,0,0,0-2-2Z"
              transform="translate(0.04 -18.98)"
            />
            <path
              className="cls-2"
              d="M78,29.51s4-5-1-5-39,1-39,1-2,0-1,4c0,0-6,0-6-3,0,0-1-2,5-3s42-4,42-4,9-1,12,10Z"
              transform="translate(0.04 -18.98)"
            />
          </svg>
        </div>
      </div>
      <div className="container__greetings">
        <h1 className="text1"></h1>
        <h2 className="text2"></h2>
      </div>
    </div>
  );
};
export default Animation;
