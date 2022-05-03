/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import ApplyForIGOSection from "../components/ApplyForIGOSection";

const Staking: NextPage = () => {
  const [currentValue, setCurrentValue] = useState("sevenDays");
  const [user, setUser] = useState('nominator');
  const [value, setValue] = useState(0);
  const [balance, setBalance] = useState(15000);

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
    <div className="col-12 wrapper">
      <div className="col-lg-6 balance-detail">
        <div>
          <h2>
            54,000 LEMA
            <p>Available Balance</p>
            <div className="line"></div>
          </h2>
        </div>
        <div>
          <h2>
            245,000 LEMA
            <p>Staked Balance</p>
            <div className="line"></div>
          </h2>
        </div>
        <div>
          <div className="rewards">
            <h2>
              15,000 LEMA
              <p>Staking Reward</p>
              <div className="line"></div>
            </h2>
            <button>Claim</button>
          </div>
        </div>
        <div>
          <div className="rewards">
            <h2>
              <input value={value} /> LEMA
              <p>Staking Reward</p>
              <div className="line"></div>  
            </h2>
            <button className="max">MAX</button>
            <button>Claim</button>
          </div>
        </div>
        <div>
          <div className="rewards">
            
              {
                balance < 250000 ?
                (
                  <h4>
                    You don't have enough balance to become a validator
                  </h4>
                )
                :
                (
                  <>
                    <h4>
                      You have enough balance to become a validator
                    </h4>
                    <button style={{marginTop: "0"}}>Apply</button>
                  </>
                )
              }
          </div>
        </div>
      </div>
      
      <div className="col-lg-6 balance-detail">
        <div>
          <h4>Important: To become a nominator, you have to choose 3 validators.</h4>
        </div>
        <div style={{borderBottom: "1px solid rgb(42, 44, 63)"}}>
          <h2>
            Your Validators
          </h2>
          <ul>
            <li>
              <p>1. 0xxxxxxxxx</p>
              <button>Change</button>
            </li>
            <li>
              <p>2. 0xxxxxxxxx</p>
              <button>Change</button>
            </li>
            <li>
              <p>3. </p>
              <button>Appoint</button>
            </li>
          </ul>
        </div> 
        
        <div>
          <h2>
            All Validators
          </h2>
          <ul>
            <li>
              1. 0xxxxxxxxxxxxx
            </li>
            <li>
              2. 0xxxxxxxxxxxxx
            </li>
            <li>
              3. 0xxxxxxxxxxxxx
            </li>
            <li>
              4. 0xxxxxxxxxxxxx
            </li>
            <li>
              5. 0xxxxxxxxxxxxx
            </li>
          </ul>
        </div> 
      </div>
    </div>
  )

  const Validator = () => (
    <div className="col-12 wrapper">
      <div className="col-lg-6 balance-detail">
        <div>
          <h2>
            54,000 LEMA
            <p>Available Balance</p>
            <div className="line"></div>
          </h2>
        </div>
        <div>
          <h2>
            255,000 LEMA
            <p>Staked Balance</p>
            <div className="line"></div>
          </h2>
        </div>
        <div>
          <div className="rewards">
            <h2>
              15,000 LEMA
              <p>Staking Reward</p>
              <div className="line"></div>
            </h2>
            <button>Claim</button>
          </div>
        </div>
        <div>
          <div className="rewards">
            <h2>
              <input value={value} /> LEMA
              <p>Staking Reward</p>
              <div className="line"></div>  
            </h2>
            <button className="max">MAX</button>
            <button>Claim</button>
          </div>
        </div>
        <div>
          <div className="rewards">
            
              {
                balance < 10000 ?
                (
                  <h4>
                    You don't have enough balance to become a validator
                  </h4>
                )
                :
                (
                  <>
                    <h4>
                      You have enough balance to become a validator
                    </h4>
                    <button style={{marginTop: "0"}}>Apply</button>
                  </>
                )
              }
          </div>
        </div>
      </div>

      <div className="col-lg-6 balance-detail">
        <div>
          <h4>Important: To become a validator, you have to stake at least 250,000 LEMA.</h4>
        </div>
        <div>
          <h2>
            Your Delegators
          </h2>
          <ul>
            <li>
              1. 0xxxxxxxxxxxxx
            </li>
            <li>
              2. 0xxxxxxxxxxxxx
            </li>
            <li>
              3. 0xxxxxxxxxxxxx
            </li>
            <li>
              4. 0xxxxxxxxxxxxx
            </li>
            <li>
              5. 0xxxxxxxxxxxxx
            </li>
            <li>
              6. 0xxxxxxxxxxxxx
            </li>
            <li>
              7. 0xxxxxxxxxxxxx
            </li>
          </ul>
        </div> 
      </div>
    </div>
  )
  
  // const Nominatorr = () => (
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
  //       <h5>Choose a Validator</h5>
  //       <ul className="date-listing mb-35" style={{flexWrap: "wrap", rowGap:"1rem"}}>
  //         <li className="StakeTablinks" id="defaultOpen" style={{borderRadius: "4px"}}>
  //           <button
  //             onClick={(e) => openTab(e, "sevenDays")}
  //             className={currentValue == "sevenDays" ? "active" : ""}
  //           >
  //             0x77...19C
  //           </button>
  //         </li>
  //         <li className="StakeTablinks" style={{borderRadius: "4px"}}>
  //           <button
  //             onClick={(e) => openTab(e, "fourteenDays")}
  //             className={currentValue == "fourteenDays" ? "active" : ""}
  //           >
  //             0x22...778
  //           </button>
  //         </li>
  //         <li className="StakeTablinks" style={{borderRadius: "4px"}}>
  //           <button
  //             onClick={(e) => openTab(e, "thirtyDays")}
  //             className={currentValue == "thirtyDays" ? "active" : ""}
  //           >
  //             0x74...1C8
  //           </button>
  //         </li>
  //         <li className="StakeTablinks" style={{borderRadius: "4px"}}>
  //           <button
  //             onClick={(e) => openTab(e, "sixtyDays")}
  //             className={currentValue == "sixtyDays" ? "active" : ""}
  //           >
  //             0x1A...91A
  //           </button>
  //         </li>
  //         <li className="StakeTablinks" style={{borderRadius: "4px"}}>
  //           <button
  //             onClick={(e) => openTab(e, "eightyDays")}
  //             className={currentValue == "eightyDays" ? "active" : ""}
  //           >
  //             0x32...1A3
  //           </button>
  //         </li>
  //       </ul>
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
          
  //         <div
  //           id="eightyDays"
  //           className="StakeTabcontent"
  //           style={{
  //             display: currentValue == "eightyDays" ? "block" : "none",
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
