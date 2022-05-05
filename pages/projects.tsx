/* eslint-disable @next/next/no-img-element */

import type { NextPage } from "next";
import Link from "next/link";
import ApplyForIGOSection from "../components/ApplyForIGOSection";
import ProjectListItem from "../components/projects/ProjectListItem";
import ProjectListPast from "../components/projects/ProjectListPast";

const Projects: NextPage = () => {
  return (
    <div>
      <div className="gamfi-breadcrumbs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="breadcrumbs-area sec-heading">
                <div className="sub-inner mb-15">
                  <Link href="/">
                    <a className="breadcrumbs-link">Home</a>
                  </Link>
                  <span className="sub-title">Governance</span>
                  <img
                    className="heading-left-image"
                    src="assets/images/icons/steps.png"
                    alt="Steps-Image"
                  />
                </div>
                <h2 className="title mb-0">EPOCH - 5</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamfi-previous-section pt-70 pb-120 md-pb-80">
        <div className="container">
          <div className="project-menu-area d-flex align-items-center justify-content-between">
            <div className="project-left-menu">
              <ul className="nav" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#open-igo"
                    type="button"
                    role="tab"
                    aria-controls="open-igo"
                    aria-selected="true"
                  >
                    Ongoing
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#past-igo"
                    type="button"
                    role="tab"
                    aria-controls="past-igo"
                    aria-selected="false"
                  >
                    Past Winners
                  </button>
                </li>
              </ul>
            </div>
            <div className="project-right-menu">
              <ul className="al-access-menu">
                <li className="access">
                  <a href="#">Sort by</a>
                  <ul className="sub-menu">
                    <li style={{borderRadius: "4px 4px 0 0"}}>
                      <a href="#">Vote</a>
                    </li>
                    <li style={{borderRadius: "0 0 4px 4px"}}>
                      <a href="#">Name</a>
                    </li>
                  </ul>
                </li>
                <li className="block">
                  <a href="#">All Block Chain</a>
                  <ul className="sub-menu">
                    <li style={{borderRadius: "4px 4px 0 0"}}>
                      <a href="#">
                        <img
                          src="assets/images/project/previous-image.png"
                          alt="icon"
                        />{" "}
                        Binance (BSC)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/project/previous-image2.png"
                          alt="icon"
                        />{" "}
                        Ethereum (ETH)
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/images/project/previous-image3.png"
                          alt="icon"
                        />{" "}
                        Polygon
                      </a>
                    </li>
                    <li style={{borderRadius: "0 0 4px 4px"}}>
                      <a href="#">
                        <img src="assets/images/project/chain.png" alt="icon" />{" "}
                        All Block Chain
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="open-igo"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row align-items-center">
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="upcoming"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="previous-mainmenu mb-15">
                  </div>
                </div>
                <ProjectListItem />
                <ProjectListItem />
                <ProjectListItem />
              </div>
              <div className="gamfi-navigation text-center mt-10">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-Vector"></i>
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-arrow_right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="past-igo"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="previous-mainmenu mb-15">
                  </div>
                </div>
                <ProjectListPast />
                <ProjectListPast />
                <ProjectListPast />
                <ProjectListPast />
              </div>
              <div className="gamfi-navigation text-center mt-10">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-Vector"></i>
                    </a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      1
                    </a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-arrow_right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyForIGOSection />
    </div>
  );
};

export default Projects;
