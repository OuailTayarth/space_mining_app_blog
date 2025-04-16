/* eslint-disable @next/next/no-img-element */
import React from "react";

const MiningSpace = () => {
  return (
    <section className="about-us section-padding valign position-re">
      <div className="container">
        <div className="row row-reverse">
          <div className="col-lg-6 valign md-mb50">
            <div className="mb-50 wow fadeIn" id="mt-23">
              <h6 id="aboutTitle">About</h6>
              <h3 className="fw-600 text-u ls1 mb-10 color-font-black">
                Space Mining
              </h3>
              <p id="about-p" className="fw-500">
                Note: The term “space mining” is shorthand for the more accurate
                term, “space resource utilization.”
              </p>
              <p id="about-p">
                Space miners are scientists, astronauts, engineers,
                exobiologists, geologists, chemists, and computer experts.
              </p>

              <p id="about-p">
                Space miners will explore, measure, develop, and utilize the
                infinite resources of our galaxy, starting with our Moon,
                near-Earth asteroids, and Mars and its moons. They will repair,
                recharge and recycle orbiting satellites and spacecraft; harness
                solar energy from orbit to power down to Earth; and use zero/low
                gravity, extreme temperatures, and the vacuum of space to test
                new compounds.
              </p>
              <p id="about-p">
                Space miners will look for biosignatures on other worlds;
                identify off-world soils suitable for the construction of 3D
                printed habitats; prospect metal ores for tool production or
                rare earth elements for advanced electronics; produce rocket
                propellant from water (liquid hydrogen and liquid oxygen) and
                the carbon dioxide atmosphere of Mars (methane). Finally, space
                miners will be directing the robotics underlying all these
                operations.
              </p>
              <p id="about-p">
                Space miners seek not to damage other celestial bodies, such has
                been done on Earth, but to pioneer the construction and
                operation of beyond-Earth outposts using excavated water-ice,
                found on many planetary bodies, for life support.
              </p>
            </div>
          </div>

          <div className="col-lg-6 img">
            <img src="/img/mobile-app/Choice1.jpg" alt="" id="about-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiningSpace;
