/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro3 = () => {
  return (
    <header className="slider-stwo valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img">
              <img src="/img/mobile-app/Choice2.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title mb-5">
                <h6>The Future of Space Mining</h6>
              </div>
              <h1 className="fw-600">Unlocking the Treasures of the Universe.</h1>
              {/* <p>
              Space mining is the extraction of valuable materials from celestial bodies such as asteroids, comets and the moon. These materials can include water, precious metals, and rare earth elements
                <br /> The mining of these resources can be used for a variety of purposes such as creating fuel for spacecraft, building materials for lunar colonies...
              </p> */}
              <p className="launching-soon">launching soon</p>
              <ul>
                <li><h1 className="countdow-time fw-600">01</h1>
                  <p className="countdown-label">days</p>
                </li>
                <li><h1 className="countdow-time fw-600"><span id="dots">:</span>20</h1>
                  <p className="countdown-label">hours</p>
                </li>
                <li><h1 className="countdow-time fw-600" ><span id="dots">:</span>00</h1>
                  <p className="countdown-label">minutes</p>
                </li>
                <li><h1 className="countdow-time fw-600"><span id="dots">:</span>00</h1>
                  <p className="countdown-label">seconds</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro3;
