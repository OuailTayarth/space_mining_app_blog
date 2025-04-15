import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import Collection from "../components/Collection/collection";

const Homepage5 = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <Collection />
      <Footer />
    </LightTheme>
  );
};

export default Homepage5;
