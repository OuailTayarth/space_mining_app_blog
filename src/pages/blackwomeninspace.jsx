import React from "react";
import blog1DataV2 from "../data/blog2V.json";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import BlogStandardV2 from "../components/Blog-standard/blog-standardV2";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogLightB = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <PageHeader
        title="Space Mining News and Publications."
        paragraph="Current events and information about space resource utilization."
      />
      <BlogStandardV2 blogsV2={blog1DataV2} />
      <Footer />
    </LightTheme>
  );
};

export default BlogLightB;
