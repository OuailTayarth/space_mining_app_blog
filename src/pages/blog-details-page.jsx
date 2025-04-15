import React from "react";

import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import BlogDetails from "../components/Blog-details/blog-details";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogDetailsLight = () => {
  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar theme="themeL" />
      <PageHeader title="Blog Details." />
      <BlogDetails />
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
