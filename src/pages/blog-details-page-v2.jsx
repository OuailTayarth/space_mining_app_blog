import React from "react";
import blog3Data from "../data/blog3.json";

import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";
import BlogDetailsV2 from "../components/Blog-details/blog-details-v2";

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
      <BlogDetailsV2 theme="light" />
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
