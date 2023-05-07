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
              
              <p id="about-p" className="fw-500">The Space Miner’s mission is to raise awareness of the field of Space Resource Mining while celebrating black women in the space industry.</p> 
              <div className="spacePadding"></div>
              <p id="about-p">The Space Miner’s debut collection, Celestial Fire Bosses, showcases an innovative, neoteric collection of 30 hand-drawn base characters (space miners) and 60 thoughtfully chosen traits, resulting in 2,025 total pieces.</p>
              <div className="spacePadding"></div>
              <p id="about-p">Each base character in this collection has been individually designed using real black women as inspiration. This approach differs from most generative collections, which attempt to create racial diversity by adding skin tone traits to one racially-generic base character.</p>
              <div className="spacePadding"></div>
              <p id="about-p">Additionally, the layers used in this collection are not superficial stock traits; rather, they are carefully crafted, thematically-relevant traits, which include scientific, historical, and cultural references. </p>
              <div className="spacePadding"></div>
              <p id="about-p">The Space Miner’s Celestial Fire Bosses collection is the brainchild of Lisa Haley and Taryn Van Deusen, a mother-daughter team with backgrounds in the field of Space Resource Mining. Lisa, subject matter expert and consultant, is a published author and graduate of the Colorado School of Mines Space Resources program. Taryn is a lawyer working on her PhD in the same program. Marco, the collection’s artist, has brought Lisa and Taryn’s vision to life using his hyper-digital, abstract style. </p>
              <div className="spacePadding"></div>
              <p id="about-p">Women of color are grossly underrepresented in the space industry and, more broadly, in STEAM (science, technology, engineering, arts, and math) and Web3. The Space Miner is dedicated to promoting gender and racial diversity in these areas with a focus on supporting black women, specifically. Check out our individual bios to learn more about the team.</p>
               
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
