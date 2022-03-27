import type { NextPage } from "next";
import Link from "next/link";
import ApplyForIGOSection from "../components/ApplyForIGOSection";
import ProjectDetailContent from "../components/projects-detail/ProjectDetailContent";

const ProjectDetails: NextPage = () => {
  return (
    <div>
      <div className="gamfi-breadcrumbs-section breadcrumbs-style2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="breadcrumbs-area sec-heading">
                <div className="sub-inner">
                  <Link href="/">
                    <a className="breadcrumbs-link">Home</a>
                  </Link>
                  <Link href="/projects">
                    <a className="breadcrumbs-link">Project</a>
                  </Link>
                  <span className="sub-title">Project Details</span>
                  <img
                    className="heading-left-image"
                    src="assets/images/icons/steps.png"
                    alt="Steps-Image"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-7 breadcrumbs-form md-mt-10">
              <div
                className="breadcrumbs-social ml-30 md-ml-0"
                data-bs-toggle="modal"
                data-bs-target="#shareIocns"
              >
                <a href="#">
                  <i className="icon-share"></i> Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectDetailContent />
      <ApplyForIGOSection />
    </div>
  );
};

export default ProjectDetails;
