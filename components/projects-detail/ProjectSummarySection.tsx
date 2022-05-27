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
              Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. 
              ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.
            </p>
            <p>
              Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. 
              Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. 
              The project team managed to raise $18.3 million in Bitcoin, and 
              Ethereum’s price in the Initial Coin Offering (ICO) was $0.311, with over 60 million Ether sold. 
              Taking Ethereum’s price now, this puts the return on investment (ROI) 
              at an annualized rate of over 270%, essentially almost quadrupling your investment 
              every year since the summer of 2014.
            </p>
            <p className="mb-30">
              Ethereum’s own purported goal is to become a global platform for decentralized applications, 
              allowing users from all over the world to write and run software that is resistant to censorship, 
              downtime and fraud. Who Are the Founders of Ethereum?
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

const Team = () => (
  <>
    <h4 className="title-2 mb-15" id="team">Team</h4>
    <p className="mb-30">
      Russian-Canadian Vitalik Buterin is perhaps the best known of the bunch. 
      He authored the original white paper that first described Ethereum in 2013 and still works on improving 
      the platform to this day. Prior to ETH, Buterin co-founded and wrote for the Bitcoin Magazine news 
      website.British programmer Gavin Wood is arguably the second most important co-founder of ETH, as 
      he coded the first technical implementation of Ethereum in the C++ programming language, proposed 
      Ethereum’s native programming language Solidity and was the first chief technology officer of the 
      Ethereum Foundation. Before Ethereum, Wood was a research scientist at Microsoft. Afterward, he moved 
      on to establish the Web3 Foundation.
      Among the other co-founders of Ethereum are: - Anthony Di Iorio, who underwrote the project during 
      its early stage of development. - Charles Hoskinson, who played the principal role in establishing 
      the Swiss-based Ethereum Foundation and its legal framework. - Mihai Alisie, who provided assistance 
      in establishing the Ethereum Foundation. - Joseph Lubin, a Canadian entrepreneur, who, like Di Iorio, 
      has helped fund Ethereum during its early days.
    </p>
  </>
)

const Schedule = () => (
  <>
    <h4 className="title-2 mb-20" id="schedule">Schedule</h4>
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
    <h4 className="title-2 mb-20">Comparison</h4>
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
    <h4 className="title-2 mb-15">Roadmap</h4>
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

const ProjectSummarySection: NextPage = () => {
  const [activeTab, setActiveTab] = useState("summary");
  const [value, setValue] = useState("");

  const VoteNow = () => (
    <>
      <h4 className="title2 mb-15" id="vote">Vote Now</h4>
      <div className="voteContainer">
        <label>Amount</label>
        <div className="voteAction">
          <div className="inputContainer">
            <input placeholder="0.00" value={value}/>
            <span onClick={() => setValue("999.99")}>MAX</span>
          </div>
          <button className="black-shape voteBtn" style={{height: "max-content", padding: "1rem 2rem"}}>
            <span>VOTE</span>
            <span className="hover-shape1"></span>
            <span className="hover-shape2"></span>
            <span className="hover-shape3"></span>
          </button> 
        </div>
      </div>
    </>
  )

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
              id="nav-team"
              data-bs-toggle="tab"
              data-bs-target="#team"
              onClick={() => setActiveTab("team")}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <a href="#team">
               Team {" "}
              </a>
              <img src="assets/images/project/menu-image.png" alt="project" />
            </button>

            {/* <button
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
            </button> */}
            
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
          </div>
        </div>
      </div>

      <div className="col-md-8 pl-35 sm-pl-15 sm-pt-40">
      {
        activeTab === "summary" ?
        (
          <>
            <ProjectSummary />
            <Team />
            {/* <Schedule />
            <Comparison />
            <Tokenomics />
            <Roadmap /> */}
            <VoteNow />
          </>
        )
        :
        activeTab === "team" ?
        (
          <Team />
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
      </div>
    </div>
  );
};

export default ProjectSummarySection;
