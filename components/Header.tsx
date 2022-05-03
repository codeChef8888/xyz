/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Popup from "./Popup";
import ConnectWalletButton from "./ConnectWalletButton";
import useEagerConnect from "../hooks/useEagerConnect";

const Header: NextPage = () => {
  const [open, setOpen] = useState(false); //For Connect To Account PopUp

  //For the Pop.jsx
  function popOn() {
    setOpen(true);
  }
  function popOff() {
    setOpen(false);
  }

  useEagerConnect(); //For Reconnecting the Wallet After Page Reload

  return (
    <>
      {
        <header
          id="gamfi-header"
          className="gamfi-header-section default-header"
        >
          <div className="menu-area menu-sticky">
            <div className="container">
              <div className="heaader-inner-area d-flex justify-content-between align-items-center">
                <div className="gamfi-logo-area d-flex justify-content-between align-items-center">
                  <div className="logo">
                    <a href="index.html">
                      <img src="home_logo.png" width="50px" alt="logo" />
                    </a>
                  </div>
                  <div className="header-menu">
                    <ul className="nav-menu">
                      <li>
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/projects">
                          <a>Projects</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/staking">
                          <a>Staking</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/farming">
                          <a>Farming</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="gamfi-btn-area">
                  <ul>
                    <li>
                      <a
                        id="nav-expander"
                        className="nav-expander bar"
                        href="#"
                      >
                        <div className="bar">
                          <span className="dot1"></span>
                          <span className="dot2"></span>
                          <span className="dot3"></span>
                        </div>
                      </a>
                    </li>
                    <li className="buy-token">
                      <a
                        className="readon black-shape"
                        href="#"
                        style={{ borderRadius: "4px" }}
                      >
                        <span className="btn-text">Buy Token </span>
                        <i className="icon-arrow_down"></i>
                        <span className="hover-shape1"></span>
                        <span className="hover-shape2"></span>
                        <span className="hover-shape3"></span>
                      </a>
                      <ul>
                        <li>
                          <a href="#" style={{ borderRadius: "4px 4px 0 0" }}>
                            <img
                              src="assets/images/icons/pancake.png"
                              alt="pancake"
                            />{" "}
                            PancakeSwap
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icons/uniswap.png"
                              alt="uniswap"
                            />{" "}
                            UniSwap
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              src="assets/images/icons/market.png"
                              alt="market"
                            />{" "}
                            CoinMarketCap
                          </a>
                        </li>
                        <li>
                          <a href="#" style={{ borderRadius: "0 0 4px 4px" }}>
                            <img
                              src="assets/images/icons/gate.png"
                              alt="gate"
                            />{" "}
                            Gate.io
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="connectwalletbutton">
                      <ConnectWalletButton popOn={popOn} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <nav
            className="right_menu_togle mobile-navbar-menu"
            id="mobile-navbar-menu"
          >
            <div className="close-btn">
              <a id="nav-close2" className="nav-close">
                <div className="line">
                  <span className="line1"></span>
                  <span className="line2"></span>
                </div>
              </a>
            </div>
            <div className="sidebar-logo mb-30">
              <a href="index.html">
                <img src="home_logo.png" width="50px" alt="" />
              </a>
            </div>
            <ul className="nav-menu">
              <li className="current-menu-item">
                <Link href="/">
                  <a id="nav-close2">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a id="nav-close2">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/staking">
                  <a id="nav-close2">Staking</a>
                </Link>
              </li>
              <li>
                <Link href="/farming">
                  <a id="nav-close2">Farming</a>
                </Link>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Buy Token</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">PancakeSwap</a>
                  </li>
                  <li>
                    <a href="#">UniSwap</a>
                  </li>
                  <li>
                    <a href="#">CoinMarketCap</a>
                  </li>
                  <li>
                    <a href="#">Gate.io</a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  type="button"
                  className="readon black-shape-big connectWalletBtnforMobile"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src="assets/images/icons/connect.png" alt="Icon" />
                  <span className="btn-text">Connect </span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </button>
              </li>
            </ul>
          </nav>
          <div className="popup">{open ? <Popup popOff={popOff} /> : null}</div>
        </header>
      }
    </>
  );
};

export default Header;
