import React, { useState, useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/porfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Workingon from "./components/workingon/Workingon";
import WorkingOnAdmin from "./components/workingon/WorkingOnAdmin";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(window.location.hash === "#admin");

  useEffect(() => {
    const onHashChange = () => setIsAdmin(window.location.hash === "#admin");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (isAdmin) {
    return (
      <LanguageProvider>
        <WorkingOnAdmin />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Workingon />
      <Footer />
    </LanguageProvider>
  );
};

export default App;
