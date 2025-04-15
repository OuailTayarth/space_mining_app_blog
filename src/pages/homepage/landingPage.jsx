import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Landing from "../../components/Landing/landing";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";

const LandingPage = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <Landing />
      <Footer />
    </LightTheme>
  );
};

export default LandingPage;
