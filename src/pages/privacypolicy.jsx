import React from "react";
import blog3Data from "../data/blog3.json";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import BlogDetailsV4 from "../components/Blog-details/termsconditions-details";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogDetailsLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
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
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL"/>
      <PageHeader
        title="Terms & Conditions."
      />
          <BlogDetailsV4 theme="dark" blog={"blog"} />
          <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
