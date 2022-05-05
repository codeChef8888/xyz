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
      
      <div className="col-lg-6 balance-detail scrollable">
        <div>
          <h4>Important: To become a nominator, you have to choose 3 validators.</h4>
        </div>
        <div style={{borderBottom: "1px solid rgb(42, 44, 63)"}}>
          <h2>
            Your Validators
          </h2>
          <ul>
            <li>
              <p>
                0xxxxxxxxx  
                <button>Change</button>
              </p>
            </li>
            <li>
              <p>
                0xxxxxxxxx 
                <button>Change</button>
              </p>
            </li>
            <li>
              <p>
                -
                <button>Appoint</button>
              </p>
            </li>
          </ul>
        </div> 
        
        <div>
          <h2>
            All Validators
          </h2>
          <ul>
            <li>
              0xxxxxxxxxxxxx
            </li>
            <li>
              0xxxxxxxxxxxxx
            </li>
            <li>
              0xxxxxxxxxxxxx
            </li>
            <li>
              0xxxxxxxxxxxxx
            </li>
            <li>
              0xxxxxxxxxxxxx
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
                balance < 250000 ?
                (
                  <button disabled={true} className="nominator-indicator">
                    Become a Validator
                  </button>
                )
                :
                (
                  <button disabled={false} className="nominator-indicator">
                    Become a Validator
                  </button>
                )
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
