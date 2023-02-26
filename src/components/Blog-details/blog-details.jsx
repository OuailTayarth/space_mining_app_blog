/* eslint-disable @next/next/no-img-element */
import React from "react";
import {useRouter} from "next/router";
import blog1Data from "../../data/blog1.json";


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
                <img src="/img/spaceblog/blog1.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                      hello
                      </h4>
                      <div className="spacial">
                        <p>
                        
                        </p>
                      </div>
                      <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, atque repellat laudantium labore asperiores, porro eaque dolore nihil, amet incidunt blanditiis cum fugit velit nisi unde necessitatibus totam cupiditate aut perspiciatis ea autem suscipit? In incidunt pariatur iste culpa aspernatur atque reiciendis officia explicabo voluptatem delectus possimus cumque voluptatum maxime neque voluptas, aperiam non itaque sequi! Molestiae maxime impedit vel ipsa reiciendis beatae dolorum odit magnam. Amet aliquam non temporibus itaque inventore tenetur aspernatur consequatur voluptas optio atque laudantium neque labore, dolore, culpa sunt saepe mollitia ex recusandae doloribus. Temporibus, voluptas neque. Molestias obcaecati nisi at aut cumque neque sed.
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
