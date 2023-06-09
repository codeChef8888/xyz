/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

const UpcomingIGOItem: NextPage = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="project-item hover-shape-border">
        <div className="project-info d-flex">
          <Link href="/project-details">
            <a>
              <img
                src="assets/images/project/project-imagee.png"
                alt="Project-Image"
              />
            </a>
          </Link>
          <div className="project-auother">
            <h4 className="mb-10">
              <Link href="/project-details">
                <a>Render</a>
              </Link>
            </h4>
            <div className="dsc">PRICE (RNDR) = 1.30 BUSD</div>
          </div>
        </div>
        <div className="project-content">
          <div className="project-header d-flex justify-content-between">
            <div className="heading-title">
              <h4>21 Days Left</h4>
            </div>
            <div className="project-icon">
              <img
                src="assets/images/project/project-single-image.png"
                alt="Project-Image"
              />
            </div>
          </div>
          <div className="project-media">
            <ul className="project-listing">
              {/* <li>
                Min allocation <span>0.33 BUSD</span>
              </li> */}
              <li>
                Total Vote <span>20,673.70</span>
              </li>
              <li>
                Percentage <span>36%</span>
              </li>
              <li>
                Preferred DEX <span>Uniswap</span>
              </li>
              <li className="social-share">
                Social
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
                      <i className="icon-world"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <span className="border-shadow shadow-1"></span>
        <span className="border-shadow shadow-2"></span>
        <span className="border-shadow shadow-3"></span>
        <span className="border-shadow shadow-4"></span>
      </div>
    </div>
  );
};

export default UpcomingIGOItem;
