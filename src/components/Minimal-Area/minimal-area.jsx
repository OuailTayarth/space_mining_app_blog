/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row row-reverte">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/mobile-app/Choice2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About us.</h4>
              <p className="wow txt" data-splitting>
              Space Mining NFT Collection is a unique and exciting venture in the world of non-fungible tokens (NFTs).
               Our mission is to offer collectors a chance to own pieces of space-mined minerals and artifacts, verified on the blockchain for authenticity and scarcity. The collection features rare and precious items from the depths of our solar system, including meteorites, moon rocks, and asteroids. With cutting-edge technology and a deep respect for space exploration, we're proud to offer a truly one-of-a-kind NFT experience.
               Join us on this journey and add a piece of the cosmos to your collection today...
              </p>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                </li>

                <li className="wow fadeInUp" data-wow-delay=".4s">
                </li>

                <li className="wow fadeInUp" data-wow-delay=".6s">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
