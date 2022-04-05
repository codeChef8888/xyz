/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import TeamMemberItem from "./items/TeamMemberItem";

const TeamSection: NextPage = () => {
  return (
    <div className="gamfi-team-section pt-115 pb-85 md-pt-75 md-pb-42">
      <div className="container">
        <div className="sec-heading text-center mb-55">
          <div className="sub-inner  mb-15">
            <img
              className="heading-left-image"
              src="assets/images/icons/steps2.png"
              alt="Steps-Image"
            />
            <span className="ml-10 mr-10 sub-title">Team Members</span>
            <img
              className="heading-right-image"
              src="assets/images/icons/steps.png"
              alt="Steps-Image"
            />
          </div>
          <h2 className="title">Meet The Crew</h2>
        </div>
        <div className="row">
          <TeamMemberItem />
          <TeamMemberItem />
          <TeamMemberItem />
          <TeamMemberItem />
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
