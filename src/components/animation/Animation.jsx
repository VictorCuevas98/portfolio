import React, { useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useEffect } from "react";
import "./animation.css";
const Animation = () => {
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

    // GSAP animation
    gsap.registerPlugin(DrawSVGPlugin);
    gsap.registerPlugin(TextPlugin);

    //Drawing a pen
    var tl1 = gsap
      .timeline({
        defaults: { duration: 0.3, ease: "power1.inOut" },
      })
      .from("#cls-2-5", { stagger: 0.1, drawSVG: 0 })

      .from("#cls-2-2", { stagger: 0.1, drawSVG: 0 })
      .from("#cls-2-3", { stagger: 0.1, drawSVG: 0 })

      .from("#cls-2-6", { stagger: 0.1, drawSVG: 0 })

      .from("#cls-2-1", { stagger: 0.1, drawSVG: 0 })
      .fromTo(
        "#cls-1-1",
        { stagger: 0.1, drawSVG: "100% 100%" },
        { drawSVG: "100% 0" }
      )
      .from("#cls-2-4", { stagger: 0.1, drawSVG: 0 })
      .from("#cls-1-2", { stagger: 0.1, drawSVG: 0 })

      .from("#cls-1-3", { stagger: 0.1, drawSVG: 0 })
      .from("#cls-1-4", { stagger: 0.1, drawSVG: 0 })
      .from("#cls-1-5", { stagger: 0.1, drawSVG: 0 })

      /* Opening the pen */
      .to(".pen2", {
        duration: 2,
        x: 1000,
        opacity: 0,
        ease: "slow (0.3, 2, false)",
      })
      .to(
        ".pen1",
        {
          duration: 2,
          x: -1000,
          opacity: 0,
          ease: "slow (0.1, 0.1, false)",
        },
        "<"
      ) // "<" means start at the same time as previous

      .to(".pen", { display: "none" })// Making the pen invisible
      
      /* Showing the website*/
      .to(".text1", { duration: 0.5, text: "|" }, "-=2")
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 0.5, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 1, text: "お世話になります" })
      .to(".text2", { duration: 1, text: "ビクターと申します。" })

      // Animation that shows the rest of the website (cortain going up)

      .to(".container__animation", { duration: 2, height: "auto", delay: 1 })
      .to(".container__animation", { position: "static" })
      .to(".mask-1", { position: "absolute" }, "<")
      // .to(".greetings", { position: "static", top:"auto", left:"auto", transform:"none"})
      .to("#root", { position: "relative" });

    // Words animation
    var tl2 = gsap
      .timeline({ repeat: -1, repeatDelay: 2 })
      .to(".text1", { duration: 2, text: "|" })
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 2, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 2, text: "Hello" })
      .to(".text2", { duration: 2, text: "I'm Victor" })
      .to(".text1", { duration: 2, text: "|" })
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 2, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 2, text: "Bonjour" })
      .to(".text2", { duration: 2, text: "Je m'appelle Victor" })
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
      .to(".text1", { duration: 2, text: "お世話になります" })
      .to(".text2", { duration: 2, text: "ビクターと申します。" });
    // Main timeline that runs them in sequence
    var master = gsap.timeline();
    master
      .add(tl1) // tl1 runs first
      .add(tl2); // tl2 starts after tl1 finishes
  }, []);

  return (
    <div className="">
      <div className="container__animation d-flex align-items-center">
        <div className="mx-auto">
          <div className="pen">
            <div className="pen1 d-flex flex-column justify-content-end">
              <svg
                id="svg1"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 106.69 20"
              >
                <title>pluma punta</title>
                <path
                  className="cls-1"
                  id="cls-1-1"
                  d="M114,31.51l-37.25.63C58.5,32.76,44,33.51,44,33.51v15C56.79,49.17,76,50,93.21,50.26l20.75.25"
                  transform="translate(-7.35 -31.01)"
                />
                <path
                  className="cls-1"
                  id="cls-1-2"
                  d="M113.93,37.51h-66v-2l66.1-.73"
                  transform="translate(-7.35 -31.01)"
                />
                <path
                  className="cls-1"
                  id="cls-1-3"
                  d="M42,33.51v15s-26-2-29-6v-3S18,35.51,42,33.51Z"
                  transform="translate(-7.35 -31.01)"
                />
                <path
                  className="cls-1"
                  id="cls-1-4"
                  d="M16,41.51H40v5s-16,0-24-4Z"
                  transform="translate(-7.35 -31.01)"
                />
                <path
                  className="cls-1"
                  id="cls-1-5"
                  d="M11,39.51V42S4,41.18,11,39.51Z"
                  transform="translate(-7.35 -31.01)"
                />
              </svg>
            </div>
            <div className="pen2 d-flex flex-column justify-content-end">
              <svg
                id="svg2"
                data-name="Capa 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 106.5 32.02"
              >
                <title>Pluma 2</title>
                <path
                  className="cls-2"
                  id="cls-2-1"
                  d="M1,31.51H19v19H0"
                  transform="translate(0.04 -18.98)"
                />
                <path
                  className="cls-2"
                  id="cls-2-2"
                  d="M21,31.51v19H91a2.94,2.94,0,0,0,3-2.88V34.51s0-3-4-3Z"
                  transform="translate(0.04 -18.98)"
                />
                <path
                  className="cls-2"
                  id="cls-2-3"
                  d="M23,34.51v3H90s1-3-2-3Z"
                  transform="translate(0.04 -18.98)"
                />
                <path
                  className="cls-2"
                  id="cls-2-4"
                  d="M.5,34.72,17,34.51v3H.23"
                  transform="translate(0.04 -18.98)"
                />
                <path
                  className="cls-2"
                  id="cls-2-5"
                  d="M96,35.51v12h8s2,0,2-3v-7a2,2,0,0,0-2-2Z"
                  transform="translate(0.04 -18.98)"
                />
                <path
                  className="cls-2"
                  id="cls-2-6"
                  d="M78,29.51s4-5-1-5-39,1-39,1-2,0-1,4c0,0-6,0-6-3,0,0-1-2,5-3s42-4,42-4,9-1,12,10Z"
                  transform="translate(0.04 -18.98)"
                />
              </svg>
            </div>
          </div>
          <div className="greetings">
            <h2 className="text1"></h2>
            <h3 className="text2"></h3>
          </div>
        </div>
      </div>
      <div className="mask-1">
        <h2 className="t1"></h2>
        <h2 className="t1"></h2>
      </div>
    </div>
  );
};
export default Animation;
