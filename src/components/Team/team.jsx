/* eslint-disable @next/next/no-img-element */
import React from "react";

const Team = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Our Team
              </h6>
              <h3 className="wow color-font-black wow fadeIn">
                Fierce Advocates &amp; Passionate Creators.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row centered">
          <div className="col-lg-4 col-md-6">
            <div className="item cir md-mb50">
              <div className="img">
                <img
                  className="team-image"
                  src="/img/teampic/team5.jpg"
                  alt="Lisa Haley"
                />
                <div className="info">
                  <h6>Lisa Haley</h6>
                  <h7 className="title">
                    Space Resource Consultant and Co-Founder
                  </h7>
                  <div className="spaceTitle"></div>{" "}
                  <span>
                    Lisa is a published author in the field of space resources
                    and a seasoned educator with 45 years of experience. She has
                    a bachelor’s degree in Community Health and a master’s
                    degree in Multicultural Education with an emphasis on
                    diverse learning styles. <br></br>
                    <div className="space"></div>
                    <div className="space"></div> She is also certified through
                    the Colorado School of Mines’ Mechanical Engineering
                    Department’s Space Resources graduate program. <br></br>{" "}
                    <div className="space"></div> <div className="space"></div>
                    Lisa serves as Space Resource Consultant of Astrolith,
                    advising on planetary geology, space resource utilization,
                    space operations/systems, and aerospace industry advocacy.{" "}
                    <br></br> <div className="space"></div>{" "}
                    <div className="space"></div>
                    Her passions are science and space education, especially
                    advocating for girls and women in the STEM fields.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item cir sm-mb50">
              <div className="img">
                <img
                  className="team-image"
                  src="/img/teampic/tarynNewPicture.PNG"
                  alt="Taryn Haley Van Deusen"
                />
                <div className="info">
                  <h6>Taryn Haley Van Deusen</h6>
                  <h7 className="title">
                    Creative Director and Co-Founder
                  </h7>{" "}
                  <br></br>
                  <div className="spaceTitle"></div>
                  <span>
                    Taryn is a practicing government contracts attorney working
                    on her PhD in Space Resources with a focus on space law and
                    policy from the Colorado School of Mines. <br></br>{" "}
                    <div className="space"></div>
                    <div className="space"></div>
                    Taryn is the visionary behind Astrolith and its Celestial
                    Fire Bosses Collection. The collection is a tribute to,
                    inspired by, and dedicated to her daughter. <br></br>{" "}
                    <div className="space"></div>
                    <div className="space"></div> Taryn’s goal, through the
                    collection, is to support and promote black women in the
                    space and Web3 industries while shining a light on the
                    burgeoning field of space resource utilization. <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="item cir sm-mb50">
              <div className="img">
                <img
                  className="team-image"
                  src="/img/teampic/marco.PNG"
                  alt="Marco Antonio Soria"
                />
                <div className="info">
                  <h6>Marco Antonio Soria</h6>
                  <h7 className="title">NFT artist</h7> <br></br>
                  <div className="spaceTitle"></div>{" "}
                  <span>
                    {" "}
                    Marco is a digital artist and illustrator based out of
                    Mexico City. His artwork’s post-modern pop realism flavor is
                    derived from his use of bold, hyper-digital colors,
                    idiosyncratic shading, and abstract concepts. <br></br>{" "}
                    <div className="space"></div>
                    <div className="space"></div> His unique images have been
                    featured on websites like Art Connect and in magazines like
                    Wow Art Catalogue. <br></br> <div className="space"></div>
                    <div className="space"></div>
                    Marco is the artist behind Astrolith’s Celestial Fire Bosses
                    collection and its marketing content. <br></br>{" "}
                    <div className="space"></div>
                    <div className="space"></div> He thoughtfully brought Taryn
                    and Lisa’s concept to life through his creativity,
                    expertise, and belief in the vision of the company.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" id="team-padding-profil">
            <div className="item cir">
              <div className="img">
                <img
                  className="team-image"
                  src="/img/teampic/team4.jpg"
                  alt="The Muse"
                />
                <div className="info">
                  <h6>The Muse</h6>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
