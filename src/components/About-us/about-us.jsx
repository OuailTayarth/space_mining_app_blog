/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import AboutUs1Date from "../../data/sections/about-us1.json";

const AboutUs = () => {
  return (
    <section className="about-us section-padding valign position-re">
      <div className="container">
        <div className="row row-reverse">
          <div className="col-lg-6 valign md-mb50">
            <div className="mb-50 wow fadeIn" id="mt-23">
              <h6 id="aboutTitle">
                ABOUT US
              </h6>
              <h3 className="fw-600 text-u ls1 mb-10 color-font-black">
                The Space Miner
              </h3>

              {/* <h3 className="fw-600 text-u ls1 mb-10 color-font">
                NFT Space Mining
              </h3> */}
              
              <p id="about-p" className="fw-500">The Space Miner’s mission is to harness the power of Web3, through digital art, to raise awareness of the field of space resource utilization while celebrating black women in the space industry.</p> 
              <p id="about-p">Our purpose is to showcase how humans can use off-world solutions to solve Earth’s problems, from racial inequity to natural resource depletion.</p>
              <p id="about-p">Our vision is to inspire Earth’s future galactic pioneers and ambassadors from a planet worth saving.</p>
              <p id="about-p">Women of color are grossly underrepresented in the space industry and, more broadly, in STEAM (science, technology, engineering, arts, and math) and Web3. The Space Miner is dedicated to promoting gender and racial diversity in these areas.</p>
              {/* <Link href="/about/about-dark">
                <a className="butn bord curve mt-30">
                  <span>Read More</span>
                </a>
              </Link> */}
            </div>
          </div>
          <div className="col-lg-6 img">
            <img src="/img/mobile-app/Choice3.jpg" alt="" id="about-img" />
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
