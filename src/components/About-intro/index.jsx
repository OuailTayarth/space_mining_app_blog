import React from "react";
import Split from "../Split";
import AboutInfo1Data from "../../data/sections/about-info1.json";

const AboutIntro = () => {
  return (
    <section className="intro-section pb-0">
      <div className="line bottom left"></div>
      <div className="container wow">
        {AboutInfo1Data.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="row aboutIntroPadding">
              <div className="col-lg-3 col-md-4">
                <div className="htit sm-mb30">
                  <h4 className="titleIntro">{item.title}</h4>
                </div>
              </div>
              <div className="col-lg-8 offset-lg-1 col-md-8">
                <div className="text">
                    <p id="about-p"
                      className="wow txt mb-10 words chars splitting"
                      data-splitting
                    >
                      {item.paragraph1}
                    </p>
                    <p id="about-p"
                      className="wow txt words chars splitting"
                      data-splitting
                    >
                      {item.paragraph2}
                    </p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutIntro;
