/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import blog1Data from "../../data/blog1.json";
import parse from "html-react-parser";


const BlogDetails = ({ theme }) => {
  const messageRef = React.useRef(null);
  const [blogData, setBlogData] = useState({});
  console.log(blogData);
  const router = useRouter();
  // get the id from the URL
  const {id} = router.query;

  useEffect(()=> {
    loadData();
  }, [id]);
  

  function loadData() {
    const blogItem = blog1Data.find((item) => item.id === parseInt(id));
    if(blogItem) {
      setBlogData(blogItem);
      console.log("Id",id);
      console.log("Item selected",blogItem);
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
                <p>{blogData.imageText}</p>
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                      {blogData.title}
                      </h4>
                        <p>
                      {parse(blogData.content)}
                      {/* {blogData.content} */}
                        </p>
                        <div className="img centered">
                            <img src={blogData.image2} alt="" />
                        </div>
                      <p>
                      {parse (blogData.content2)}
                      {/* {blogData.content2} */}
                      </p>
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

{/* <div className="spacial">
                        <p>
                      {blogItem.content}
                        </p>
                      </div> */}
