/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState } from "react";

const ProjectSummary = () => (
  <>
    <div className="project-summary-content">
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="project-summary"
          role="tabpanel"
          aria-labelledby="project-summary"
        >
          <div className="project-summary-information" id="project-summary">
            <h4 className="title2 mb-15">Project Summary</h4>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random
              text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur cites of the word in classical literature.
            </p>
            <p className="mb-30">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from {"de Finibus Bonorum et Malorum"} by Cicero are
              also reproduced in their exact original
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="project-video-area">
      <img
        src="assets/images/project/project-video.png"
        alt="Project-image"
        />
      <a
        className="video-icons"
        href="https://www.youtube.com/watch?v=fzBTvDraO5U"
        >
        <i className="icon-play"></i>
      </a>
    </div>
  </>
)

const Schedule = () => (
  <>
    <h4 className="mb-20" id="schedule">Schedule</h4>
    <table className="mb-55">
      <tr className="table-header">
        <th>Round</th>
        <th>Opens</th>
        <th>Closes</th>
      </tr>
      <tr>
        <td>Allocation</td>
        <td>20.02.2022 08:00:00 UTC</td>
        <td>22.02.2022 24:00:00 UTC</td>
      </tr>
      <tr>
        <td>Validator Round</td>
        <td>29.02.2022 05:00:00 UTC</td>
        <td>30.02.2022 03:00:00 UTC</td>
      </tr>
      <tr>
        <td>Staking Round</td>
        <td>08.03.2022 12:00:00 UTC</td>
        <td>10.03.2022 05:00:00 UTC</td>
      </tr>
      <tr>
        <td>Sale Ends</td>
        <td>15.03.2022 02:00:00 UTC</td>
        <td>18.03.2022 16:00:00 UTC</td>
      </tr>
    </table>
  </>
)
const Comparison = () => (
  <>
    <h4 className="mb-20">Comparison</h4>
    <p className="mb-45">
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over 2000 years old. Richard McClintock, a Latin professor
      at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur cites of the word in classical
      literature. Standard chunkde Finibus Bonorum et Malorum by Cicero
      are also reproduced in their exact original making it over 2000
      years old. Richard McClintock
    </p>
  </>
)
const Tokenomics = () => (
  <>
    <h4 className="mb-20">Tokenomics</h4>
    <div className="project-service align-items-center">
      <div className="project-image">
        <img
          src="assets/images/project/explore-image.png"
          alt="Project-image"
        />
      </div>
      <div className="project-content">
        <div className="project-price mr-65">
          <div className="project-sale darkslateblue">
            <span>Marketing</span>
            <h5>18.00%</h5>
          </div>
          <div className="project-sale cyan">
            <span>Team</span>
            <h5>7.5%</h5>
          </div>
          <div className="project-sale dodgerBlue">
            <span>Advisors</span>
            <h5>10.00%</h5>
          </div>
          <div className="project-sale turquoise">
            <span>Ecosystem</span>
            <h5>16.33%</h5>
          </div>
        </div>
        <div className="project-price">
          <div className="project-sale springGreen">
            <span>Private Sale</span>
            <h5>30.00%</h5>
          </div>
          <div className="project-sale darkturquoise">
            <span>Staking</span>
            <h5>9.50%</h5>
          </div>
          <div className="project-sale turquoise">
            <span>Liquidity</span>
            <h5>12.00%</h5>
          </div>
        </div>
      </div>
    </div>
  </>
)
const Roadmap = () => (
  <>
    <h4 className="title2 mb-15">Roadmap</h4>
    <p>
      It has roots in a piece of classical Latin literature from 45 BC,
      making it over 2000 years old. Richard McClintock, a Latin professor
      at Hampden-Sydney College in Virginia, looked up one of the more
      obscure Latin words, consectetur cites of the word in classical
      literature.
    </p>
    <p className="mb-55">
      Standard chunkde Finibus Bonorum et Malorum by Cicero are also
      reproduced in their exact original making it over 2000 years old.
      Richard McClintock
    </p>
  </>
)

const VoteNow = () => (
  <>
    <h4 className="title2 mb-15">Vote Now</h4>
    <div className="voteContainer">
      <label>Vote Amount</label>
      <div className="voteAction">
        <div className="inputContainer">
          <input placeholder="0.00"/>
          <span>MAX</span>
        </div>
        <button className="black-shape">
          <span>VOTE</span>
          <span className="hover-shape1"></span>
          <span className="hover-shape2"></span>
          <span className="hover-shape3"></span>
        </button> 
      </div>
    </div>
  </>
)

const ProjectSummarySection: NextPage = () => {
  const [activeTab, setActiveTab] = useState("summary");
  
  return (
    <div className="row mt-50">
      <div className="col-md-4">
        <div className="project-summary-menu">
          <div className="nav" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-project-summary"
              data-bs-toggle="tab"
              data-bs-target="#project-summary"
              onClick={() => setActiveTab("summary")}
              type="button"
              role="tab"
              aria-selected="true"
            >
              <a href="#project-summary">
               Project Summary{" "}
              </a>
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>

            <button
              className="nav-link"
              id="nav-schedule"
              data-bs-toggle="tab"
              data-bs-target="#schedule"
              onClick={() => setActiveTab("schedule")}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <a href="#schedule">
                Schedule{" "}
              </a>
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>

            <button
              className="nav-link"
              id="nav-comparison"
              data-bs-toggle="tab"
              data-bs-target="#comparison"
              onClick={() => setActiveTab("comparison")}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Comparison{" "}
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>

            <button
              className="nav-link"
              id="nav-tokenomics"
              data-bs-toggle="tab"
              data-bs-target="#tokenomics"
              onClick={() => setActiveTab("tokenomics")}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Tokenomics{" "}
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>

            <button
              className="nav-link"
              id="nav-roadmap"
              data-bs-toggle="tab"
              data-bs-target="#roadmap"
              onClick={() => setActiveTab("roadmap")}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Roadmap{" "}
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>
            
            <button
              className="nav-link"
              id="nav-roadmap"
              data-bs-toggle="tab"
              data-bs-target="#roadmap"
              onClick={() => setActiveTab("vote")}
              type="button"
              role="tab"
              aria-selected="false"
            >
              Vote{" "}
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>

            {/* <button
              className="nav-link"
              id="nav-team-member"
              data-bs-toggle="tab"
              data-bs-target="#team-member"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Team Member{" "}
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>

            <button
              className="nav-link"
              id="nav-tnvestors"
              data-bs-toggle="tab"
              data-bs-target="#tnvestors"
              type="button"
              role="tab"
              aria-selected="false"
            >
              Investors{" "}
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button> */}
          </div>
        </div>
      </div>

      <div className="col-md-8 pl-35 sm-pl-15 sm-pt-40">
      {
        activeTab === "summary" ?
        (
          <>
            <ProjectSummary />
            <Schedule />
            <Comparison />
            <Tokenomics />
            <Roadmap />
            <VoteNow />
          </>
        )
        :
        activeTab === "schedule" ?
        (
          <Schedule />
        )
        :
        activeTab === "comparison" ?
        (
          <Comparison />
        )
        :
        activeTab === 'tokenomics' ?
        (
          <Tokenomics />
        )
        :
        activeTab === 'roadmap' ?
        (
          <Roadmap />
        )
        :
        (
          <VoteNow />
        )
      }
        {/* <div
          className="tab-pane fade show active"
          id="schedule"
          role="tabpanel"
          aria-labelledby="schedule"
        >

        </div> */}
      </div>
    </div>
  );
};

export default ProjectSummarySection;
