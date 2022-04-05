/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

const HomeCarouselItem: NextPage = () => {
  return (
    <div className="game-price-item active-shape hover-shape-inner">
      <div className="game-price-inner">
        <div className="total-price">
          <div className="price-inner d-flex mb-45  md-mb-20">
            <div className="image-icon">
              <Link href="/project-details">
                <a>
                  <img
                    src="assets/images/project/ninga-44.png"
                    alt="icon-image"
                  />
                </a>
              </Link>
            </div>
            <div className="price-details">
              <h3 className="mb-15">
                <Link href="/project-details">
                  <a>Thetan Arena</a>
                </Link>
              </h3>
              <div className="dsc">PRICE (DDO) = 1.30 BUSD</div>
            </div>
          </div>
          <div className="all-raise mb-10">
            Total Raise: 20,673.70 BUSD ( 36% )
          </div>
        </div>
        <div className="allocation-max text-center">
          <img src="assets/images/project/icon-3.png" alt="icon-image" />
          <div className="allocation">Allocation: 500 BUSD Max</div>
        </div>
        <div className="targeted-raise">
          <div className="all-raise mb-10">Sale End In</div>
          <div className="timer">
            <ul>
              <li className="days"></li>
              <li className="hours"></li>
              <li className="minutes"></li>
              <li className="seconds"></li>
            </ul>
          </div>
          <div className="targeted-raise text-end">
            Targeted Raise 110,000 BUSD
          </div>
        </div>
      </div>
      <div className="progress-inner">
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            aria-valuenow={36}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: "36%" }}
          ></div>
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

export default HomeCarouselItem;
