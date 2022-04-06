/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import ApplyForIGOSection from "../components/ApplyForIGOSection";

const Staking: NextPage = () => {
  const [currentValue, setCurrentValue] = useState("sevenDays");

  function openTab(e: React.MouseEvent<HTMLButtonElement>, value: string) {
    e.preventDefault();
    setCurrentValue(value);
  }

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

                  <span className="sub-title">Staking</span>
                  <img
                    className="heading-left-image"
                    src="assets/images/icons/steps.png"
                    alt="Steps-Image"
                  />
                </div>
                <h2 className="title mb-0">Staking</h2>
              </div>
            </div>
            <div className="col-lg-7 breadcrumbs-form md-mt-30">
              <div className="btn-area">
                <Link href="/leaderboard">
                  <a className="readon black-shape">
                    <span className="btn-text">Leaderboard</span>
                    <span className="hover-shape1"></span>
                    <span className="hover-shape2"></span>
                    <span className="hover-shape3"></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="participat-information project-details-conent gamfi-about-secion pb-80 md-pb-50">
        <div className="container">
          <div className="row pt-70">
            <div className="col-lg-6 pr-25 md-pr-15">
              <div className="project-item" style={{borderRadius: "4px"}}>
                <div className="project-info border-bottom-2">
                  <h4 className="mb-15">Stake and participate</h4>
                  <h3 className="mb-15">
                    256.50 <span className="buse">LEMA</span>
                  </h3>
                  <span>Your Balance</span>
                </div>
                <ul className="date-listing mb-35">
                  <li className="StakeTablinks" id="defaultOpen" style={{borderRadius: "4px"}}>
                    <button
                      onClick={(e) => openTab(e, "sevenDays")}
                      className={currentValue == "sevenDays" ? "active" : ""}
                    >
                      7 Days
                    </button>
                  </li>
                  <li className="StakeTablinks" style={{borderRadius: "4px"}}>
                    <button
                      onClick={(e) => openTab(e, "fourteenDays")}
                      className={currentValue == "fourteenDays" ? "active" : ""}
                    >
                      14 Days
                    </button>
                  </li>
                  <li className="StakeTablinks" style={{borderRadius: "4px"}}>
                    <button
                      onClick={(e) => openTab(e, "thirtyDays")}
                      className={currentValue == "thirtyDays" ? "active" : ""}
                    >
                      30 Days
                    </button>
                  </li>
                  <li className="StakeTablinks" style={{borderRadius: "4px"}}>
                    <button
                      onClick={(e) => openTab(e, "sixtyDays")}
                      className={currentValue == "sixtyDays" ? "active" : ""}
                    >
                      60 Days
                    </button>
                  </li>
                </ul>
                <div className="project-content">
                  <div
                    id="sevenDays"
                    className="StakeTabcontent"
                    style={{
                      display: currentValue == "sevenDays" ? "block" : "none",
                    }}
                  >
                    <div className="project-media mb-40">
                      <ul className="project-listing">
                        <li>
                          Lock period: <strong>7 days</strong>{" "}
                          <span>APY Rate</span>
                        </li>
                        <li>
                          Re-locks on registration: <strong>Yes</strong>{" "}
                          <a href="#">
                            <span className="big-text">12 %</span>
                          </a>
                        </li>
                        <li>
                          Early unstake fee: <strong>25%</strong>
                          <span>*APY is dynamic</span>
                        </li>
                        <li>
                          Status: <strong>Unlocked</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="fourteenDays"
                    className="StakeTabcontent"
                    style={{
                      display:
                        currentValue == "fourteenDays" ? "block" : "none",
                    }}
                  >
                    <div className="project-media mb-40">
                      <ul className="project-listing">
                        <li>
                          Lock period: <strong>14 days</strong>{" "}
                          <span>APY Rate</span>
                        </li>
                        <li>
                          Re-locks on registration: <strong>Yes</strong>{" "}
                          <a href="#">
                            <span className="big-text">20 %</span>
                          </a>
                        </li>
                        <li>
                          Early unstake fee: <strong>25%</strong>
                          <span>*APY is dynamic</span>
                        </li>
                        <li>
                          Status: <strong>Unlocked</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="thirtyDays"
                    className="StakeTabcontent"
                    style={{
                      display: currentValue == "thirtyDays" ? "block" : "none",
                    }}
                  >
                    <div className="project-media mb-40">
                      <ul className="project-listing">
                        <li>
                          Lock period: <strong>30 days</strong>{" "}
                          <span>APY Rate</span>
                        </li>
                        <li>
                          Re-locks on registration: <strong>Yes</strong>{" "}
                          <a href="#">
                            <span className="big-text">25 %</span>
                          </a>
                        </li>
                        <li>
                          Early unstake fee: <strong>25%</strong>
                          <span>*APY is dynamic</span>
                        </li>
                        <li>
                          Status: <strong>Unlocked</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="sixtyDays"
                    className="StakeTabcontent"
                    style={{
                      display: currentValue == "sixtyDays" ? "block" : "none",
                    }}
                  >
                    <div className="project-media mb-40">
                      <ul className="project-listing">
                        <li>
                          Lock period: <strong>60 days</strong>{" "}
                          <span>APY Rate</span>
                        </li>
                        <li>
                          Re-locks on registration: <strong>Yes</strong>{" "}
                          <a href="#">
                            <span className="big-text">35 %</span>
                          </a>
                        </li>
                        <li>
                          Early unstake fee: <strong>25%</strong>
                          <span>*APY is dynamic</span>
                        </li>
                        <li>
                          Status: <strong>Unlocked</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="project-form-list">
                  <h5 className="mb-18">Balance: 2889.00 BUSD</h5>
                  <div className="balance-form-area mb-27">
                    <input type="text" placeholder="00.00" style={{borderRadius: "4px"}}/>
                    <span className="max">MAX</span>
                    <div className="white-shape-small approve">
                      <input type="submit" value="Approve" />
                      <span className="hover-shape1"></span>
                      <span className="hover-shape2"></span>
                      <span className="hover-shape3"></span>
                    </div>
                  </div>
                  <h5 className="mb-18">Staked: 256.50 BUSD</h5>
                  <div className="balance-form-area">
                    <input type="text" placeholder="0.00" style={{borderRadius: "4px"}}/>
                    <span className="max">MAX</span>
                    <div className="white-shape-small">
                      <input type="submit" value="Withdraw" />
                      <span className="hover-shape1"></span>
                      <span className="hover-shape2"></span>
                      <span className="hover-shape3"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-25 md-pl-15">
              <div className="project-item project-value-inner d-flex justify-content-between align-items-center mb-30 rounded">
                <div className="project-value">
                  <h3 className="mb-15">$7,868,163.54</h3>
                  <span>Total Value Locked</span>
                </div>
                <div className="project-value-image">
                  <img
                    className="heading-right-image"
                    src="assets/images/project/rank.png"
                    alt="rank"
                  />
                </div>
              </div>
              <div className="project-item project-value-inner d-flex justify-content-between align-items-center mb-30 rounded">
                <div className="project-value">
                  <h3 className="mb-15">158.50 %</h3>
                  <span>Apy</span>
                </div>
                <div className="project-value-image">
                  <img
                    className="heading-right-image"
                    src="assets/images/project/rank2.png"
                    alt="rank"
                  />
                </div>
              </div>
              <div className="project-item project-value-inner d-flex justify-content-between align-items-center rounded">
                <div className="project-value">
                  <h3 className="mb-15">5699</h3>
                  <span>Number of Stakers</span>
                </div>
                <div className="project-value-image">
                  <img
                    className="heading-right-image"
                    src="assets/images/project/rank3.png"
                    alt="rank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplyForIGOSection />
    </div>
  );
};

export default Staking;
