import type { NextPage } from "next";
const ProjectTokenInfoSection: NextPage = () => {
  return (
    <div className="row mt-30">
      <div className="col-md-6">
        <div className="project-item">
          <div className="project-info">
            <h4 className="mb-30">
              Render{" "}
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
                  Date Listed <span>April 2 2022</span>
                </li>
                <li>
                  Total Vote <span>20,673.70</span>
                </li>
                <li>
                  Percentage <span>36%</span>
                </li>
                <li>
                  Preferred DEX <span>Uniswap</span>
                </li>
                <li>
                  Voters <span>3015/5000</span>
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
                  Token Name <span>The Wasted Lands</span>
                </li>
                <li>
                  Token Symbol <span>RNDR</span>
                </li>
                <li>
                  Decimals <span>18</span>
                </li>
                <li>
                  Address{" "}
                  <span>
                    <img src="assets/images/project/icon.png" alt="project" />
                    0x22d40020282f9c8
                  </span>
                </li>
                <li>
                  Total Supply <span>3,333,334.00 RNDR</span>
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
