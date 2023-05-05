import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Intro3 from "../../components/Intro3/intro3";
import Footer from "../../components/Footer/footer";
import LightTheme from "../../layouts/Light";
import DarkTheme from "../../layouts/Dark";


const LandingPage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro3/>
      <Footer hideBGCOLOR />
    </LightTheme>
  );
};

export default LandingPage;
