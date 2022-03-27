import type { NextPage } from "next";
import UpcomingIGOItem from "./items/UpcomingIGOItem";

const NextProjectsSection: NextPage = () => {
  return (
    <div className="gamfi-project-section main-project-area">
      <div className="container">
        <div className="sec-inner align-items-center d-flex justify-content-between mb-30">
          <div className="sec-heading">
            <div className="sub-inner mb-15">
              <span className="sub-title">Next Projects</span>
              <img
                className="heading-left-image"
                src="assets/images/icons/steps.png"
                alt="Steps-Image"
              />
            </div>
            <h2 className="title">Upcoming IGO</h2>
          </div>
          <div className="gamfi-btn-area">
            <ul>
              <li>
                <a className="readon black-shape" href="calendar.html">
                  <i className="icon-calendar"></i>
                  <span className="btn-text">Calendar</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center">
          <UpcomingIGOItem />
          <UpcomingIGOItem />
          <UpcomingIGOItem />
          <UpcomingIGOItem />
          <UpcomingIGOItem />
        </div>
      </div>
    </div>
  );
};

export default NextProjectsSection;
