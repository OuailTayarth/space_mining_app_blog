/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`} id="footerPadding">
      <div className="container">
        <div className="logo-row">
          <div></div>
          <Link href="/">
            <a className="logo">
              <img id="footerLogo" src={appData.darkLogo} alt="logo" />
            </a>
          </Link>
        </div>

        <div className="copy-right">
          <p className="copy-right-text">
            ©2024, Astrolith, All rights reserved.
          </p>
          <Link href={`/`}>
            <a className="footer-link"> Terms and conditions </a>
          </Link>
          <span className="symbol">|</span>
          <Link href={`/`}>
            <a className="footer-link"> Privacy Policy </a>
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
