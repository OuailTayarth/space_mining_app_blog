/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleMobileDropdown } from "../../common/navbar";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

const Navbar = ({ theme }) => {
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
                <img src={appData.darkLogo} alt="logo" />
              ) : (
                <img src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img src={appData.lightLogo} alt="logo" />
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
            <li className="nav-item">
              <Link href={`/`}>
                <span className="nav-link"> Home </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/about`}>
                <span className="nav-link"> About</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/collection`}>
                <span className="nav-link"> Collection </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/team`}>
                <span className="nav-link"> Our Team </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/spaceMining`}>
                <span className="nav-link"> Space Mining </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/newspublications`}>
                <span className="nav-link">News & Publications</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/blackwomeninspace`}>
                <span className="nav-link"> Black Women in Space</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href={`/scholarship`}>
                <span className="nav-link">Scholarship</span>
              </Link>
            </li>
          </ul>

          <button
            className="connect-btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
              getData();
            }}
          >
            <a
              href=""
              className="butn bord menu curve white"
              data-wow-delay=".5s"
            >
              <span className="account-address">
                {blockchain.walletConnected === false ? (
                  "Connect Wallet"
                ) : (
                  <>{blockchain.account?.substring(0, 15)}...</>
                )}
              </span>
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
