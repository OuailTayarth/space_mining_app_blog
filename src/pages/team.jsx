import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import Team from "../components/Team/team";

const Homepage2 = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <Team />
      <Footer />
    </LightTheme>
  );
};

export default Homepage2;
