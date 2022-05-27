/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
const ProjectTokenInfoSection: NextPage = () => {
  return (
    <div className="row mt-30">
      <div className="col-md-6">
        <div className="project-item">
          <div className="project-info">
            <h4 className="mb-30">
              Token Info{" "}
              <img
                src="assets/images/project/project-heading-image.png"
                alt="project"
              />
            </h4>
          </div>
          <div className="project-content">
            <div className="project-media">
              <ul className="project-listing">
                <li>
                  Token Name <span>The Wasted Land</span>
                </li>
                <li>
                  Token Symbol <span>RNDR</span>
                </li>
                <li>
                  Price <span>$XX</span>
                </li>
                <li>
                  24 Hr Volume <span>$XXX</span>
                </li>
                <li>
                  Market Cap <span>$XXX</span>
                </li>
                <li>
                  Fully Diluted Market Cap <span>$XXX</span>
                </li>
                <li>
                  Circulating Supply <span>$XXX</span>
                </li>
                <li>
                  Max Supply <span>$XXX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="project-item">
          <div className="project-info d-flex">
            <h4 className="mb-20">
              Pool Info{" "}
              <img
                src="assets/images/project/project-heading-image.png"
                alt="project"
              />
            </h4>
          </div>
          <div className="project-content">
            <div className="project-media">
              <ul className="project-listing">
                <li>
                  DEX <span>Uniswap</span>
                </li>
                <li>
                  Pair <span>LEMA/BNB</span>
                </li>
                <li>
                  Liquidity Size <span>$XXX</span>
                </li>
                <li>
                  24 Hr Volume <span>$XXX</span>
                </li>
                <li>
                  24 Hr Fee <span>$XXX</span>
                </li>
                <li>
                  Circulating Supply <span>$XXX</span>
                </li>
                <li>
                  Max Supply <span>3,333,334.00 RNDR</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTokenInfoSection;
