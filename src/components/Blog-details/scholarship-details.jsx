/* eslint-disable @next/next/no-img-element */
import React from "react";


const BlogDetails = ({ theme }) => {
  const messageRef = React.useRef(null);
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
                <img src="/img/teampic/scholarship.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                      Scholarships funded by NFT revenues are a new and innovative.
                      </h4>
                      <div className="spacial">
                        <p>
                        Scholarships funded by NFT revenues are a new and innovative way to finance education and support aspiring students.
                         The concept involves the creation and sale of unique digital assets, known as NFTs,
                         which can range from digital artwork to collectible items.
                        </p>
                      </div>
                      <p>
                      The revenue generated from the sale of these NFTs is then directed towards a scholarship program, providing students with financial assistance to further their education. This approach not only benefits the students, but also helps to promote the growth and development of the NFT market, creating a mutually beneficial relationship. With the increasing popularity of NFTs, it is likely that more and more scholarship programs will be funded in this manner in the future,
                       making education accessible to a wider range of individuals.
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
