import React from "react";
import blog1Data from "../data/blog1.json";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import BlogStandard from "../components/Blog-standard/blog-standard";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogLight = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <PageHeader
        title="Space Mining News and Publications."
        paragraph="Current events and information about space resource utilization."
      />
      <BlogStandard blogs={blog1Data} />
      <Footer />
    </LightTheme>
  );
};

export default BlogLight;
