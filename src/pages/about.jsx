import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import AboutIntro from "../components/About-intro/aboutIntro";

const About = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <AboutIntro />
      <Footer />
    </LightTheme>
  );
};

export default About;
