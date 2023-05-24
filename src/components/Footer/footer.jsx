/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR, lr }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
          <div className="logo-row">
            <div></div>
            <Link href="/">
              <a className="logo">
                  <img id="footerLogo" ref={lr} src={appData.darkLogo} alt="logo" />
              </a>
            </Link>
          </div>

          <div>
                <div className="item">
                  <div className="social">
                    <a href="#0">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#0">
                      <i className="fab fa-discord"></i>
                    </a>
                  </div>
                  <div className="copy-right">
                    <p>
                      ©2023, The Space Miner, All rights reserved.
                    </p>
                  </div>
                </div>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
