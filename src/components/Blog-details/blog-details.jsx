/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blog1Data from "../../data/blog1.json";
import parse from "html-react-parser";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState({});
  const router = useRouter();

  // get the id of the selected blog from the URL
  const { id } = router.query;

  useEffect(() => {
    loadData();
  }, [id]);

  function loadData() {
    const blogItem = blog1Data.find((item) => item.id === parseInt(id));
    if (blogItem) {
      setBlogData(blogItem);
    } else {
      console.error("Blog Not Found");
    }
  }

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            {Object.keys(blogData).length === 0 ? (
              <p>Loading...</p>
            ) : (
              <div className="post">
                <div className="img">
                  <img src={blogData.image} alt="" />
                </div>
                <div>
                  <p>{blogData.imageText}</p>
                </div>
                <div className="content pt-60">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <h4 className="extra-title">{blogData.title}</h4>
                        <p>{parse(blogData.content)}</p>
                        <div className="img centered">
                          <img src={blogData.image2} alt="" />
                        </div>
                        <p>{parse(blogData.content2)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
