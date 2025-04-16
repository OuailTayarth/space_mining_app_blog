/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blog2VData from "../../data/blog2V.json";
import parse from "html-react-parser";

const BlogDetailsV2 = ({ theme }) => {
  const messageRef = React.useRef(null);
  const [blogData, setBlogData] = useState({});
  console.log(blogData);
  const router = useRouter();
  // get the id from the URL
  const { id } = router.query;

  useEffect(() => {
    loadData();
  }, [id]);

  function loadData() {
    const blogItem = blog2VData.find((item) => item.id === parseInt(id));
    if (blogItem) {
      setBlogData(blogItem);
      console.log("Id", id);
      console.log("Item selected", blogItem);
    }
  }

  // get a blog based on a specific Id

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
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
                  <p className="imageText-mrg">{blogData.imageText1}</p>
                </div>
                <div className="content pt-40">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <h4 className="extra-title">{blogData.title}</h4>
                        <p>
                          {parse(blogData.content)}
                          {/* {blogData.content} */}
                        </p>
                        <p>
                          {parse(blogData.content2)}
                          {/* {blogData.content2} */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="img centered">
                    <img
                      src={blogData.image3}
                      alt=""
                      className="JessicaImgTalk"
                    />
                  </div>
                  <div>
                    <p className="imageText-padding">{blogData.imageText3}</p>
                  </div>
                </div>
                <div className="img centered">
                  <img src={blogData.image2} alt="" />
                </div>
                <div>
                  <p className="imageText-padding">{blogData.imageText2}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsV2;
