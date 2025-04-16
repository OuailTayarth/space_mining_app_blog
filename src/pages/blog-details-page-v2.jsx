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
      <Navbar theme="themeL" />
      <PageHeader title="Blog Details." />
      <BlogDetailsV2 theme="light" />
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
