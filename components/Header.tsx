import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header
      id="gamfi-header"
      className="gamfi-header-section transparent-header"
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
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="project.html">Projects</a>
                  </li>
                  <li>
                    <a href="staking.html">Staking</a>
                  </li>
                  <li>
                    <a href="farming.html">Farming</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="gamfi-btn-area">
              <ul>
                <li>
                  <a id="nav-expander" className="nav-expander bar" href="#">
                    <div className="bar">
                      <span className="dot1"></span>
                      <span className="dot2"></span>
                      <span className="dot3"></span>
                    </div>
                  </a>
                </li>
                <li className="buy-token">
                  <a className="readon black-shape" href="#">
                    <span className="btn-text">Buy Token </span>
                    <i className="icon-arrow_down"></i>
                    <span className="hover-shape1"></span>
                    <span className="hover-shape2"></span>
                    <span className="hover-shape3"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="#">
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
                      <a href="#">
                        <img src="assets/images/icons/gate.png" alt="gate" />{" "}
                        Gate.io
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    type="button"
                    className="readon white-btn hover-shape"
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
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="project.html">Projects</a>
          </li>
          <li>
            <a href="staking.html">Staking</a>
          </li>
          <li>
            <a href="farming.html">Farming</a>
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
              <img src="assets/images/icons/connect_white.png" alt="Icon" />
              <span className="btn-text">Connect </span>
              <span className="hover-shape1"></span>
              <span className="hover-shape2"></span>
              <span className="hover-shape3"></span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
