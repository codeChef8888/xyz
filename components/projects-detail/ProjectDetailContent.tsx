import type { NextPage } from "next";
import ProjectClaimSection from "./ProjectClaimSection";
import ProjectSummarySection from "./ProjectSummarySection";
import ProjectTokenInfoSection from "./ProjectTokenInfoSection";

const ProjectDetailContent: NextPage = () => {
  return (
    <div className="project-details-conent gamfi-about-secion pb-80 md-pb-20">
      <div className="container">
        <ProjectClaimSection />
        <ProjectTokenInfoSection />
        <ProjectSummarySection />
      </div>
    </div>
  );
};

export default ProjectDetailContent;
