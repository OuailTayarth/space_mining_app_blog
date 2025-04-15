import React from "react";

const Collection = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className="particles circle-bg valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="cont text-center">
              <h1 className="wow fadeIn">
                CELESTIAL <br /> FIRE BOSSES <br />
              </h1>
              <h6 id="collection-text" className="wow fadeIn">
                A GLIMPSE INTO HUMANITY'S FUTURE
              </h6>
              <div className="mint-btn wow fadeIn">
                <a class="butn bord menu curve white" href="#">
                  MINT YOUR NFT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default Collection;
