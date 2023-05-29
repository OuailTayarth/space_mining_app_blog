import React from "react";
import blog1DataV2 from "../data/blog2V.json";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import BlogStanderdv2 from "../components/Blog-standerd/blog-standerdv2";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogLightB = () => {
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
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <PageHeader
        title="Space Mining News and Publications."
        paragraph="Current events and information about space resource utilization."
      />
      <BlogStanderdv2 blogsV2={blog1DataV2} />
      <Footer />
    </LightTheme>
  );
};

export default BlogLightB;
