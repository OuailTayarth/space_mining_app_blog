import React from "react";

const Intro6 = () => {
  return (
    <header className="mobile-app valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="caption">
              <h1 className="mb-20">
                Let’s Unlock the Treasures of the Universe
              </h1>
              <p>
              Space mining is the extraction of valuable materials from celestial bodies such as asteroids, comets and the moon. These materials can include water,
              precious metals, and rare earth elements...
              </p>
              <div className="butons mt-25">
                <a href="#0" className="butn-gr bord menu buton">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1 mt-25">
            <div className="img">
              <img src="/img/mobile-app/Choice2.jpg" id="borderRaduis" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro6;
