import type { NextPage } from "next";
import Link from "next/link";
import ApplyForIGOSection from "../components/ApplyForIGOSection";
import FarmListItem from "../components/farming/FarmListItem";
import LeaderboardItem from "../components/leaderboard/LeaderboardItem";

const Leaderboard: NextPage = () => {
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
                  <span className="sub-title">Leaderboard</span>
                  <img
                    className="heading-left-image"
                    src="assets/images/icons/steps.png"
                    alt="Steps-Image"
                  />
                </div>
                <h2 className="title mb-0">Leaderboard</h2>
              </div>
            </div>
            <div className="col-lg-7 breadcrumbs-form mr-0 md-pt-30">
              <form>
                <input
                  type="text"
                  id="Search"
                  name="search"
                  placeholder="Search by name, token, address"
                />
                <span className="submit">
                  <i className="icon-search"></i>
                  <input type="submit" />
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="leaderboard-table-list pb-140 md-pb-80 pt-55">
        <div className="container">
          <div className="leaderboard-table-maindiv">
            <div className="leaderboard-table">
              <div>
                <div className="leaderboard-header">
                  <span># Rank</span>
                  <span>Name</span>
                  <span>Public Key</span>
                  <span>locked</span>
                  <span>Balance</span>
                </div>

                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
                <LeaderboardItem />
              </div>
            </div>
          </div>

          <div className="gamfi-navigation text-center mt-40">
            <ul>
              <li>
                <a href="#">
                  <i className="icon-Vector"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a className="active" href="#">
                  2
                </a>
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
      <ApplyForIGOSection />
    </div>
  );
};

export default Leaderboard;
