import React from "react";
import Navbar from "../components/Navbar/navbar";
import AboutUs from "../components/About-us/about-us";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";

const Homepage1 = () => {
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
        <AboutUs />
        <Footer />
    </LightTheme>
  );
};

export default Homepage1;
