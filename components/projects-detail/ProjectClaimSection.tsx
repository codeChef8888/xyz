/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const ProjectClaimSection: NextPage = () => {
  return (
    <div
      className="game-price-item hover-shape-inner wow fadeInUp"
      data-wow-delay="300ms"
      data-wow-duration="1200ms"
    >
      <div className="game-price-inner">
        <div className="total-price">
          <div className="price-inner d-flex mb-45">
            <div className="image-icon">
              <img
                src="assets/images/project/ninga-44.png"
                alt="icon-image"
              />
            </div>
            <div className="price-details">
              <h3 className="mb-15">The Wasted Lands</h3>
              <div className="dsc">price (DDO) = 0.13 BUSD</div>
            </div>
          </div>
          <div className="all-raise mb-10">
            {" "}
            Total Raise 75,999.70 BUSD ( 86% )
          </div>
        </div>
        <div className="allocation-max text-center">
          <img src="assets/images/project/icon-2.png" alt="icon-image" />
          <div className="allocation">Allocation: 500 BUSD Max</div>
        </div>
        <div className="targeted-raise">
          <div className="all-raise mb-10">Sale End In</div>
          <div className="price-counter mb-48">
            <div className="timer">
              <ul>
                <li className="days"></li>
                <li className="hours"></li>
                <li className="minutes"></li>
                <li className="seconds"></li>
              </ul>
            </div>
          </div>
          <div className="targeted-raise text-end">
            Targeted Raise 100,000 BUSD
          </div>
        </div>
      </div>
      <div className="progress-inner">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            aria-valuenow={43}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "43%" }}
          ></div>
        </div>
      </div>
      <div className="banner-bottom-content mt-40">
        <div className="btn-area">
          <a className="readon white-shape-small" href="#">
            <span className="btn-text">Claim Token </span>
            <span className="hover-shape1"></span>
            <span className="hover-shape2"></span>
            <span className="hover-shape3"></span>
          </a>
        </div>
        <div className="text-content">Participants 4017/5000</div>
        <div className="social-area">
          <ul className="social-icon-list">
            <li>
              <a href="#">
                <i className="icon-telegram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-discord"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-medium"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className=" icon-world"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className="border-shadow shadow-1"></span>
      <span className="border-shadow shadow-2"></span>
      <span className="border-shadow shadow-3"></span>
      <span className="border-shadow shadow-4"></span>
      <span className="hover-shape-bg hover_shape1"></span>
      <span className="hover-shape-bg hover_shape2"></span>
      <span className="hover-shape-bg hover_shape3"></span>
    </div>
  );
};

export default ProjectClaimSection;
