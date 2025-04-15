import React from "react";
import Navbar from "../components/Navbar/navbar";
import MiningSpace from "../components/space-mining/miningSpace";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";

const spaceMining = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <MiningSpace />
      <Footer />
    </LightTheme>
  );
};

export default spaceMining;
