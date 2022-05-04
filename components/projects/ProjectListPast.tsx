/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

const ProjectListPast: NextPage = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="project-item hover-shape-border">
        <div className="project-info d-flex flex-column">
          <h1 style={{fontSize: "1.5rem", fontWeight: "bold"}}>EPOCH - 1</h1>
          <div className="d-flex">
            <Link href="/project-details">
                <a>
                <img
                    src="assets/images/project/project-imagee.png"
                    alt="Project-Image"
                />
                </a>
            </Link>
            <div className="d-flex flex-column">
                <h4>
                    Render
                    <div className="dsc">
                        <ul className="social-icon-list" style={{display: "flex", columnGap: "1.5rem"}}>
                            <li>
                            <a href="#">
                                <i className="icon-telegram" style={{fontSize: "0.75rem"}}></i>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="icon-twitter" style={{fontSize: "0.75rem"}}></i>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="icon-discord" style={{fontSize: "0.75rem"}}></i>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="icon-medium" style={{fontSize: "0.75rem"}}></i>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i className="icon-world" style={{fontSize: "0.75rem"}}></i>
                            </a>
                            </li>
                        </ul>
                    </div>
                </h4>
            </div>
          </div>
          <div className="project-media">
            <ul className="project-listing">
              <li>
                Total Vote <span>20,673.70</span>
              </li>
              <li>
                Percentage <span>36%</span>
              </li>
              <li>
                DEX <span>Uniswap</span>
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

export default ProjectListPast;
