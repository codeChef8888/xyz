import type { NextPage } from "next";
import Link from "next/link";
import CompletedIGOItem from "./items/CompletedIGOItem";

const CompleteProjectsSection: NextPage = () => {
  return (
    <div className="gamfi-previous-section pb-90 md-pb-50">
      <div className="container">
        <div className="sec-inner align-items-center d-flex justify-content-between  mb-50">
          <div className="sec-heading">
            <div className="sub-inner mb-15">
              <span className="sub-title">Complete Projects</span>
              <img
                className="heading-left-image"
                src="assets/images/icons/steps.png"
                alt="Steps-Image"
              />
            </div>
            <h2 className="title mb-0 xs-pb-20">Previous IGO</h2>
          </div>
          <div className="gamfi-btn-area">
            <ul>
              <li>
                <Link href="/projects">
                  <a className="view-more black-shape">
                    <span className="btn-text">View More</span>
                    <i className="icon-arrow_right"></i>
                    <span className="hover-shape1"></span>
                    <span className="hover-shape2"></span>
                    <span className="hover-shape3"></span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row align-items-center">
          <CompletedIGOItem />
          <CompletedIGOItem />
        </div>
      </div>
    </div>
  );
};

export default CompleteProjectsSection;
