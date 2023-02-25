import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import Works2 from "../components/Works2/works2";
import Works from "../components/Works/works";
import Work3 from "../components/Works3/works3";
import Work4 from "../components/Works4/works4";
import Intro4 from "../components/Intro4/intro4";
import Portfolio from "../components/Portfolio/portfolio";
import Gallery from "../components/Portfolio/Slides/Gallery";


const Homepage5 = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <Intro4 />
      <Portfolio grid={3} filterPosition="center" />
      <Footer />
    </LightTheme>
  );
};

export default Homepage5;
