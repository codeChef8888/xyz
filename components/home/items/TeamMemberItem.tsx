import type { NextPage } from "next";

const TeamMemberItem: NextPage = () => {
  return (
    <div className="col-lg-3 col-md-6">
    <div className="team-item text-center active-shape">
      <img src="assets/images/team/team-image2.png" alt="Team-image" />
      <h4 className="team-title mb-8">
        <a href="teamdetails.html">Genaro Nadel</a>
      </h4>
      <div className="dsc">VP of Engineering</div>
      <ul className="team-icon-list">
        <li>
          <a href="#">
            <i className="icon-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="icon-twitter"></i>
          </a>
        </li>
      </ul>
      <span className="border-shadow shadow-1"></span>
      <span className="border-shadow shadow-2"></span>
      <span className="border-shadow shadow-3"></span>
      <span className="border-shadow shadow-4"></span>
    </div>
  </div>
  );
};

export default TeamMemberItem;
