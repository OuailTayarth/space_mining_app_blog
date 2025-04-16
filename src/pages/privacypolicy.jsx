import React from "react";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import BlogDetailsV4 from "../components/Blog-details/termsconditions-details";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogDetailsLight = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <PageHeader title="Terms & Conditions." />
      <BlogDetailsV4 theme="dark" blog={"blog"} />
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
