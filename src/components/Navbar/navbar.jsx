/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import { useDispatch, useSelector } from "react-redux";
import {connect} from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

const Navbar = ({ lr, nr, theme }) => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);

  // Fetch the accounts Redux/blockchain
const getData = () => {
  if (blockchain.account !== "" && blockchain.smartContract !== null) {
    dispatch(fetchData(blockchain.account));
    }
};

  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            <span></span>
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href={`/homepage/home1-dark`}>
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href={`/homepage/home2-dark`}>
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href={`/homepage/home5-dark`}>
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href={`/homepage/home4-dark`}>
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href={`/homepage/home3-dark`}>
                  <a className="dropdown-item">Corporate Business</a>
                </Link>
                <Link href={`/homepage/home6-dark`}>
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href={`/homepage/home7-dark`}>
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href={`/homepage/home8-dark`}>
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div>
            </li> */}

            <li className="nav-item">
              <Link href={`/`}>
                <a className="nav-link">Home</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/about`}>
                <a className="nav-link">About</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/nftcollection`}>
                <a className="nav-link">NFT collection</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/team`}>
                <a className="nav-link">Our Team</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/spaceminingInfo`}>
                <a className="nav-link">Space Resource Mining Info/Facts</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/scholarship`}>
                <a className="nav-link">Scholarship</a>
              </Link>
            </li>

            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-dark`}>
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-dark`}>
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-dark`}>
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href={`/works/works-dark`}>
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-dark`}>
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-dark`}>
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li> */}
            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={`/blog/blog-dark`}>
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-dark`}>
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-dark`}>
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-dark`}>
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div>
            </li> */}

            {/* <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li> */}
          </ul>

        {/* <div className="connect-btn">
             <a class="butn bord menu curve white" href="#"><span>Connect Wallet</span></a>
        </div> */}

        <div className="connect-btn" onClick={()=> {
                  dispatch(connect());
                  getData();
                }}>
                  <a
                    className="butn bord menu curve white"
                    data-wow-delay=".5s"
                  >
                    <span className="account-address">
                      {blockchain.walletConnected === false ? "Connect Wallet" : (
                        <>
                          {blockchain.account?.substring(0,15)}...
                        </>
                      )}
                      </span>
                  </a>                 
                </div>
          
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
