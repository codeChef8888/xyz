/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import ApplyForIGOSection from "../components/ApplyForIGOSection";

const Staking: NextPage = () => {
  const [currentValue, setCurrentValue] = useState("sevenDays");
  const [user, setUser] = useState('nominator');

  function openTab(e: React.MouseEvent<HTMLButtonElement>, value: string) {
    e.preventDefault();
    setCurrentValue(value);
  }

  const Toogle = () => (
    <div className="toggle-stakers">
      {
        user === "nominator" ? 
        (
          <>
            <div className="active" style={{borderRadius: "4px 0 0 4px"}} onClick={() => setUser('nominator')}>
              NOMINATOR
            </div>
            <div className="staker" style={{borderRadius: "0 4px 4px 0"}} onClick={() => setUser('validator')}>
              VALIDATOR
            </div>
          </>
        )
        :
        (
          <>
            <div className="staker" style={{borderRadius: "4px 0 0 4px"}} onClick={() => setUser('nominator')}>
                NOMINATOR
            </div>
            <div className="active" style={{borderRadius: "0 4px 4px 0"}} onClick={() => setUser('validator')}>
              VALIDATOR
            </div>
          </>
        )
      }
    </div>
  )

  const Nominator = () => (
    <div className="col-12">

    </div>
  )

  const Validator = () => (
    <div className="col-lg-6 pr-25 md-pr-15">
      
    </div>
  )
  
  const Nominatorr = () => (
    <div className="col-lg-6 pr-25 md-pr-15">
      <div className="project-item" style={{borderRadius: "4px"}}>
        <div className="project-info border-bottom-2">
          <h4 className="mb-15">
            Become a Nominator {" "} 
            <span style={{fontSize:"0.75rem", fontWeight:"300", color:"#0DB2FF", cursor:"pointer"}} onClick={() => setUser('validator')}>
              or participate as validator
            </span>
          </h4>
          <h3 className="mb-15">
            256.50 <span className="buse">LEMA</span>
          </h3>
          <span>Your Balance</span>
        </div>
        <h5>Choose a Validator</h5>
        <ul className="date-listing mb-35" style={{flexWrap: "wrap", rowGap:"1rem"}}>
          <li className="StakeTablinks" id="defaultOpen" style={{borderRadius: "4px"}}>
            <button
              onClick={(e) => openTab(e, "sevenDays")}
              className={currentValue == "sevenDays" ? "active" : ""}
            >
              0x77...19C
            </button>
          </li>
          <li className="StakeTablinks" style={{borderRadius: "4px"}}>
            <button
              onClick={(e) => openTab(e, "fourteenDays")}
              className={currentValue == "fourteenDays" ? "active" : ""}
            >
              0x22...778
            </button>
          </li>
          <li className="StakeTablinks" style={{borderRadius: "4px"}}>
            <button
              onClick={(e) => openTab(e, "thirtyDays")}
              className={currentValue == "thirtyDays" ? "active" : ""}
            >
              0x74...1C8
            </button>
          </li>
          <li className="StakeTablinks" style={{borderRadius: "4px"}}>
            <button
              onClick={(e) => openTab(e, "sixtyDays")}
              className={currentValue == "sixtyDays" ? "active" : ""}
            >
              0x1A...91A
            </button>
          </li>
          <li className="StakeTablinks" style={{borderRadius: "4px"}}>
            <button
              onClick={(e) => openTab(e, "eightyDays")}
              className={currentValue == "eightyDays" ? "active" : ""}
            >
              0x32...1A3
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
          
          <div
            id="eightyDays"
            className="StakeTabcontent"
            style={{
              display: currentValue == "eightyDays" ? "block" : "none",
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
  )
  
  // const Nominator = () => (
  //   <div className="col-lg-6 pr-25 md-pr-15">
  //     <div className="project-item" style={{borderRadius: "4px"}}>
  //       <div className="project-info border-bottom-2">
  //         <h4 className="mb-15">
  //           Become a Nominator {" "}
  //           <span style={{fontSize:"0.75rem", fontWeight:"300", color:"#0DB2FF", cursor:"pointer"}} onClick={() => setUser('validator')}>
  //             or participate as validator
  //           </span>
  //         </h4>
  //         <h3 className="mb-15">
  //           256.50 <span className="buse">LEMA</span>
  //         </h3>
  //         <span>Your Balance</span>
  //       </div>
        
  //       <label>Choose a validator</label>
  //       <select className="selectNominator" value={validators} onChange={(e) => setValidators(e.target.value)}>
  //         {
  //           validatorData.map((validator, index) => (
  //             <option key={index}>{validator.account}</option>
  //           ))
  //         }
  //       </select>


  //       <div className="project-content">
  //         <div
  //           id="sevenDays"
  //           className="StakeTabcontent"
  //           style={{
  //             display: currentValue == "sevenDays" ? "block" : "none",
  //           }}
  //         >
  //           <div className="project-media mb-40">
  //             <ul className="project-listing">
  //               <li>
  //                 Lock period: <strong>7 days</strong>{" "}
  //                 <span>APY Rate</span>
  //               </li>
  //               <li>
  //                 Re-locks on registration: <strong>Yes</strong>{" "}
  //                 <a href="#">
  //                   <span className="big-text">12 %</span>
  //                 </a>
  //               </li>
  //               <li>
  //                 Early unstake fee: <strong>25%</strong>
  //                 <span>*APY is dynamic</span>
  //               </li>
  //               <li>
  //                 Status: <strong>Unlocked</strong>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <div
  //           id="fourteenDays"
  //           className="StakeTabcontent"
  //           style={{
  //             display:
  //               currentValue == "fourteenDays" ? "block" : "none",
  //           }}
  //         >
  //           <div className="project-media mb-40">
  //             <ul className="project-listing">
  //               <li>
  //                 Lock period: <strong>14 days</strong>{" "}
  //                 <span>APY Rate</span>
  //               </li>
  //               <li>
  //                 Re-locks on registration: <strong>Yes</strong>{" "}
  //                 <a href="#">
  //                   <span className="big-text">20 %</span>
  //                 </a>
  //               </li>
  //               <li>
  //                 Early unstake fee: <strong>25%</strong>
  //                 <span>*APY is dynamic</span>
  //               </li>
  //               <li>
  //                 Status: <strong>Unlocked</strong>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <div
  //           id="thirtyDays"
  //           className="StakeTabcontent"
  //           style={{
  //             display: currentValue == "thirtyDays" ? "block" : "none",
  //           }}
  //         >
  //           <div className="project-media mb-40">
  //             <ul className="project-listing">
  //               <li>
  //                 Lock period: <strong>30 days</strong>{" "}
  //                 <span>APY Rate</span>
  //               </li>
  //               <li>
  //                 Re-locks on registration: <strong>Yes</strong>{" "}
  //                 <a href="#">
  //                   <span className="big-text">25 %</span>
  //                 </a>
  //               </li>
  //               <li>
  //                 Early unstake fee: <strong>25%</strong>
  //                 <span>*APY is dynamic</span>
  //               </li>
  //               <li>
  //                 Status: <strong>Unlocked</strong>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <div
  //           id="sixtyDays"
  //           className="StakeTabcontent"
  //           style={{
  //             display: currentValue == "sixtyDays" ? "block" : "none",
  //           }}
  //         >
  //           <div className="project-media mb-40">
  //             <ul className="project-listing">
  //               <li>
  //                 Lock period: <strong>60 days</strong>{" "}
  //                 <span>APY Rate</span>
  //               </li>
  //               <li>
  //                 Re-locks on registration: <strong>Yes</strong>{" "}
  //                 <a href="#">
  //                   <span className="big-text">35 %</span>
  //                 </a>
  //               </li>
  //               <li>
  //                 Early unstake fee: <strong>25%</strong>
  //                 <span>*APY is dynamic</span>
  //               </li>
  //               <li>
  //                 Status: <strong>Unlocked</strong>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="project-form-list">
  //         <h5 className="mb-18">Balance: 2889.00 BUSD</h5>
  //         <div className="balance-form-area mb-27">
  //           <input type="text" placeholder="00.00" style={{borderRadius: "4px"}}/>
  //           <span className="max">MAX</span>
  //           <div className="white-shape-small approve">
  //             <input type="submit" value="Approve" />
  //             <span className="hover-shape1"></span>
  //             <span className="hover-shape2"></span>
  //             <span className="hover-shape3"></span>
  //           </div>
  //         </div>
  //         <h5 className="mb-18">Staked: 256.50 BUSD</h5>
  //         <div className="balance-form-area">
  //           <input type="text" placeholder="0.00" style={{borderRadius: "4px"}}/>
  //           <span className="max">MAX</span>
  //           <div className="white-shape-small">
  //             <input type="submit" value="Withdraw" />
  //             <span className="hover-shape1"></span>
  //             <span className="hover-shape2"></span>
  //             <span className="hover-shape3"></span>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // )


  return (
    <div>
      <div className="container mt-5">
        <div className="staking-heading">
          <p>
            Staking
            <h1>Solo Staking</h1>
          </p>
          {
            user === "nominator" && (
              <div className="nominator-indicator">
                Your are a Nominator
              </div>
            )
          }
        </div>

      </div>

      <div className="participat-information project-details-conent gamfi-about-secion pb-80 md-pb-50">
        <div className="container">
          {/* <div className="row pt-10"> */}
            {/* <div className="col-lg-12 pl-15" style={{display: "flex", justifyContent: "space-between"}}>
              <div className="project-item project-value-inner d-flex flex-1 flex-column justify-content-between align-items-center mb-30 rounded">
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
              <div className="project-item project-value-inner d-flex flex-1 flex-column justify-content-between align-items-center mb-30 rounded">
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
              <div className="project-item project-value-inner d-flex flex-1 flex-column justify-content-between align-items-center rounded">
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
            </div> */}

            <div className="staking-stats">
              <div className="stats">
                <h4>
                  TVL
                  <h2>$7,890,123.56</h2>
                </h4>
                <img
                  className="heading-right-image"
                  src="assets/images/project/rank.png"
                  alt="rank"
                />
              </div>
              <div className="stats">
                <h4>
                  APR
                  <h2>90.5%</h2>
                </h4>
                <img
                  className="heading-right-image"
                  src="assets/images/project/rank2.png"
                  alt="rank"
                />
              </div>
              <div className="stats">
                <h4>
                  TOTAL VALIDATORS
                  <h2>78</h2>
                </h4>
                <img
                  className="heading-right-image"
                  src="assets/images/project/rank3.png"
                  alt="rank"
                />
              </div>
            </div>
            
            <Toogle />
            {
              user === "validator" ? (<Validator />) : (<Nominator />)
            }
          </div>
        {/* </div> */}
      </div>

      <ApplyForIGOSection />
    </div>
  );
};

export default Staking;
