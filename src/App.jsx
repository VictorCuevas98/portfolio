import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Portfolio from "./components/porfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Workingon from "./components/workingon/Workingon";
const App = () => {
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
