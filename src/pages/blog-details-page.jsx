import React from "react";

import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import BlogDetails from "../components/Blog-details/blog-details";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogDetailsLight = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <PageHeader title="Blog Details." />
      <BlogDetails />
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
