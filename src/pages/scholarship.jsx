import React from "react";

import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import ScholarshipDetails from "../components/Blog-details/scholarship-details";
import PageHeader from "../components/Page-header/page-header";
import Footer from "../components/Footer/footer";

const BlogDetailsLight = () => {
  return (
    <LightTheme>
      <Navbar theme="themeL" />
      <PageHeader
        title="NFT-Supported Scholarships."
        paragraph="Scholarships funded by NFT revenues are a new and innovative."
      />
      <ScholarshipDetails />
      <Footer />
    </LightTheme>
  );
};

export default BlogDetailsLight;
