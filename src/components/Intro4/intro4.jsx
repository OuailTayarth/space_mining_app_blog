import React from "react";
import particlesConfig from "../../config/particle-config";
import particlesBlackConfig from "../../config/pr-s-black";
import Particles from "react-tsparticles";

const Intro4 = ({ sliderRef, blackStar }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1 className="wow fadeIn">
              WELCOME TO <br/> .SPACE MINING. <br/>
              </h1>
              <h6 id="collection-text" className="wow fadeIn">A collection of NFTs from the Final Frontier</h6>
              <div className="mint-btn wow fadeIn">
                <a class="butn bord menu curve white" href="#">MINT YOUR NFT</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Particles
        id="particles-js"
        options={blackStar ? particlesBlackConfig : particlesConfig}
      /> */}

        {/* <div className="gradient-circle"></div>
        <div className="gradient-circle two"></div> */}
      <div className="line bottom left"></div>
    </header>
  );
};

export default Intro4;
