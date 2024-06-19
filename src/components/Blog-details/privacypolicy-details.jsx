/* eslint-disable @next/next/no-img-element */
import React from "react";


const BlogDetailsV5 = ({ theme }) => {
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
              <div className="content pt-0 ">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      </h4>
                      <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quis natus sequi vel maxime libero voluptate quasi modi. Nihil vero quae sapiente perspiciatis animi asperiores ipsum maxime et neque, ipsa officia exercitationem qui eveniet maiores, natus accusamus praesentium ex facere ab voluptatum eum rerum laboriosam placeat! Vero labore natus commodi eius, sed qui sint quasi in adipisci exercitationem numquam hic unde! Ipsa autem labore non illo corporis neque iste, officia repudiandae hic consectetur, excepturi libero quidem nesciunt sequi id! Fugiat, laborum doloremque. Maxime ea consequuntur, cupiditate rem quas obcaecati error repellendus dignissimos voluptatibus reiciendis! Est beatae cum quisquam minima quod?
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quis natus sequi vel maxime libero voluptate quasi modi. Nihil vero quae sapiente perspiciatis animi asperiores ipsum maxime et neque, ipsa officia exercitationem qui eveniet maiores, natus accusamus praesentium ex facere ab voluptatum eum rerum laboriosam placeat! Vero labore natus commodi eius, sed qui sint quasi in adipisci exercitationem numquam hic unde! Ipsa autem labore non illo corporis neque iste, officia repudiandae hic consectetur, excepturi libero quidem nesciunt sequi id! Fugiat, laborum doloremque. Maxime ea consequuntur, cupiditate rem quas obcaecati error repellendus dignissimos voluptatibus reiciendis! Est beatae cum quisquam minima quod?
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quis natus sequi vel maxime libero voluptate quasi modi. Nihil vero quae sapiente perspiciatis animi asperiores ipsum maxime et neque, ipsa officia exercitationem qui eveniet maiores, natus accusamus praesentium ex facere ab voluptatum eum rerum laboriosam placeat! Vero labore natus commodi eius, sed qui sint quasi in adipisci exercitationem numquam hic unde! Ipsa autem labore non illo corporis neque iste, officia repudiandae hic consectetur, excepturi libero quidem nesciunt sequi id! Fugiat, laborum doloremque. Maxime ea consequuntur, cupiditate rem quas obcaecati error repellendus dignissimos voluptatibus reiciendis! Est beatae cum quisquam minima quod?
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quis natus sequi vel maxime libero voluptate quasi modi. Nihil vero quae sapiente perspiciatis animi asperiores ipsum maxime et neque, ipsa officia exercitationem qui eveniet maiores, natus accusamus praesentium ex facere ab voluptatum eum rerum laboriosam placeat! Vero labore natus commodi eius, sed qui sint quasi in adipisci exercitationem numquam hic unde! Ipsa autem labore non illo corporis neque iste, officia repudiandae hic consectetur, excepturi libero quidem nesciunt sequi id! Fugiat, laborum doloremque. Maxime ea consequuntur, cupiditate rem quas obcaecati error repellendus dignissimos voluptatibus reiciendis! Est beatae cum quisquam minima quod?

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

export default BlogDetailsV5;
