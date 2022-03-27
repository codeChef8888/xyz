import type { NextPage } from "next";
import Link from "next/link";
import FarmListItem from "../components/farming/FarmListItem";

const Farming: NextPage = () => {
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

                  <span className="sub-title">Farm</span>
                  <img
                    className="heading-left-image"
                    src="assets/images/icons/steps.png"
                    alt="Steps-Image"
                  />
                </div>
                <h2 className="title mb-0">Farming</h2>
              </div>
            </div>
            <div className="col-lg-7 breadcrumbs-form md-mt-40">
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
              <div className="btn-area">
                <a className="readon black-shape" href="leaderboard.html">
                  <span className="btn-text">Leaderboard</span>
                  <span className="hover-shape1"></span>
                  <span className="hover-shape2"></span>
                  <span className="hover-shape3"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gamfi-farming gamfi-previous-section pt-70 pb-130 md-pb-60">
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
                    aria-selected="true"
                  >
                    Active
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="tab-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#upcoming"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Inactive
                  </button>
                </li>
                <li className="form-switch" id="addswitchclass">
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                  <span className="title">Staked Only</span>
                </li>
              </ul>
            </div>
            <div className="project-right-menu">
              <ul className="al-access-menu right-postion">
                <li>
                  <a href="#">All Pools</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">All Pools</a>
                    </li>
                    <li>
                      <a href="#">Public</a>
                    </li>
                    <li>
                      <a href="#">Private</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="gamfi-farming-table">
            <table>
              <tbody>
                <tr>
                  <th>Pools</th>
                  <th>APY</th>
                  <th>STAKED</th>
                  <th>TEARNED</th>
                  <th>Total Value Locked</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="gamfi-farming-content">
            <FarmListItem />
            <FarmListItem />
            <FarmListItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farming;
