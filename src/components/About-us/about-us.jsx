/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs = () => {
  return (
    <section className="about-us section-padding valign position-re">
      <div className="container">
        <div className="row row-reverse">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50" id="mt-23">
              <h6 id="aboutTitle">
                ABOUT US
              </h6>
              <h3 className="fw-600 text-u ls1 mb-10 color-font-black">
                Space Mining
              </h3>

              {/* <h3 className="fw-600 text-u ls1 mb-10 color-font">
                NFT Space Mining
              </h3> */}
              <p id="about-p">Space Mining NFT Collection is a unique and exciting venture in the world of non-fungible tokens (NFTs).
               Our mission is to offer collectors a chance to own pieces of space-mined minerals and artifacts, verified on the blockchain for authenticity and scarcity. The collection features rare and precious items from the depths of our solar system, including meteorites, moon rocks, and asteroids. With cutting-edge technology and a deep respect for space exploration, we're proud to offer a truly one-of-a-kind NFT experience.
               Join us on this journey...</p>
              {/* <Link href="/about/about-dark">
                <a className="butn bord curve mt-30">
                  <span>Read More</span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6 img">
            <img src="/img/mobile-app/Choice1.jpg" alt="" id="about-img" />
            {/* <div className="stauts">
              {AboutUs1Date.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
