import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { useLanguage } from "../../context/LanguageContext";
import { GREETINGS, GREETING_ORDER } from "../../utils/localeDetection";
import "./animation.css";

const Animation = () => {
  const { language, isReady } = useLanguage();
  const hasPlayed = useRef(false);

  useEffect(() => {
    if (!isReady || hasPlayed.current) return;
    hasPlayed.current = true;

    gsap.registerPlugin(DrawSVGPlugin, TextPlugin);

    const primaryGreeting = GREETINGS[language] || GREETINGS.en;
    const otherLanguages = GREETING_ORDER.filter((lang) => lang !== language);

    const tl1 = gsap
      .timeline({ defaults: { duration: 0.3, ease: "power1.inOut" } })
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
      )
      .to(".pen", { display: "none" })
      .to(".text1", { duration: 0.5, text: "|" }, "-=2")
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 0.5, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 1, text: primaryGreeting.line1 })
      .to(".text2", { duration: 1, text: primaryGreeting.line2 })
      .to(".container__animation", { duration: 2, height: "auto", delay: 1 })
      .to(".container__animation", { position: "static" })
      .to(".mask-1", { position: "absolute" }, "<")
      .to("#root", { position: "relative" });

    const tl2 = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    otherLanguages.forEach((lang) => {
      const greeting = GREETINGS[lang];
      tl2
        .to(".text1", { duration: 2, text: "|" })
        .to(".text1", { duration: 0, text: "" })
        .to(".text2", { duration: 2, text: "|" })
        .to(".text2", { duration: 0, text: "" })
        .to(".text1", { duration: 2, text: greeting.line1 })
        .to(".text2", { duration: 2, text: greeting.line2 });
    });

    tl2
      .to(".text1", { duration: 2, text: "|" })
      .to(".text1", { duration: 0, text: "" })
      .to(".text2", { duration: 2, text: "|" })
      .to(".text2", { duration: 0, text: "" })
      .to(".text1", { duration: 2, text: primaryGreeting.line1 })
      .to(".text2", { duration: 2, text: primaryGreeting.line2 });

    const master = gsap.timeline();
    master.add(tl1).add(tl2);
  }, [isReady, language]);

  if (!isReady) {
    return (
      <div className="container__animation d-flex align-items-center">
        <div className="mx-auto animation-loading">
          <div className="animation-loading__dot" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container__animation d-flex align-items-center">
        <div className="mx-auto">
          <div className="pen">
            <div className="pen1 d-flex flex-column justify-content-end">
              <svg
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 106.69 20"
              >
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
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 106.5 32.02"
              >
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
