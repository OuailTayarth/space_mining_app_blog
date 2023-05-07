/* eslint-disable @next/next/no-img-element */
import React from "react";
import {useRouter} from "next/router";
import blog1Data from "../../data/blog1.json";
import parse from "html-react-parser";


const BlogDetails = ({ theme }) => {
  const messageRef = React.useRef(null);
  const router = useRouter();
  // get the id from the URL
  const {id} = router.query;
  
  // get a blog based on a specific Id
  const blogItem = blog1Data.find((item) => item.id === parseInt(id));
  console.log("Id",id);
  console.log("Item selected",blogItem);
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
            <div className="post">
              <div className="img">
                <img src={blogItem.image} alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                      {blogItem.title}
                      </h4>
                        <p>
                      {parse(blogItem.content)}
                        </p>
                      <p>
                      {parse (blogItem.content2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
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
