/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const Portfolio = ({ grid, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);

  React.useEffect(()=> {
    const gallery = new SimpleLightbox('.gallery a');
    return () => gallery.destroy();
  },[]);

  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s" id="nft-collection-title">
                  Our Art
                </h6>
              <h3 className="wow" id="nft-collection-title">
                  Mint Your NFT &amp; <br /> and Join Our Amazing Community.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${grid === 3 ? "container-fluid" : "container"}`}>
        <div className="row">
          {/* <div
            className={`filtering ${
              filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                ? "text-left"
                : "text-right"
            } col-12`}
          >
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div> */}

          <div className="gallery full-width">
            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6 lg-mr"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a href ="/img/collection/InnerCollection/Choice1.jpg"className="imago wow">
                    <img src="/img/collection/Choice1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a href="/img/collection/InnerCollection/Choice2.jpg" className="imago wow">
                    <img src="/img/collection/Choice2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a href="/img/collection/InnerCollection/Choice7.jpg" className="imago wow">
                    <img src="/img/collection/Choice7.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items graphic wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a href="/img/collection/InnerCollection/Choice4.jpg" className="imago wow">
                    <img src="/img/collection/Choice4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items web wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <a href="/img/collection/InnerCollection/Choice5.jpg" className="imago wow">
                    <img src="/img/collection/Choice5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                </a>
              </div>
            </div>

            <div
              className={`${
                grid === 3
                  ? "col-lg-4 col-md-6"
                  : grid === 2
                  ? "col-md-6"
                  : "col-12"
              } items brand wow fadeInUp`}
              data-wow-delay=".4s"
            >
              <div className="item-img">
                  <a href="/img/collection/InnerCollection/Choice3.jpg" className="imago wow">
                    <img src="/img/collection/Choice3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
