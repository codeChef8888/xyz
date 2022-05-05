/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState } from "react";

const FarmListItem: NextPage = () => {
  const [expandMenu, setExpandMenu] = useState(false);

  return (
    <div
      className={`gamfi-table-inner active-shape ` + (expandMenu ? 'expeand-bottom-content' : '')}
    >
      <div
        className="farming-wrapper d-flex align-items-center justify-content-between"
        onClick={() => {setExpandMenu(!expandMenu)}}
      >
        <div className="farming-table">
          <p>POOLS</p>
          <div className="list-content list-1 image-row">
            <img src="assets/images/icons/LEMABNB.png" alt="Previous-Image" />
            LEMA/BNB
          </div>
        </div>

        <div className="farming-table">
          <p>APY</p>
          <div className="list-2">89.58 %</div>
        </div>

        <div className="farming-table">
          <p>STAKES</p>
          <div className="list-3">50,800 LEMA</div>
        </div>

        <div className="farming-table">
          <p>TEARNED</p>
          <div className="list-4">8,899.50 LEMA</div>
        </div>

        <div className="farming-table">
          <p>TVL</p>
          <div className="list-5">$4,305,626.99</div>
        </div>
        
        <div className="list-6" style={{alignSelf: "flex-end", padding: "0 1rem 0 0"}}>
          <i className="icon-arrow_down expeand-arrow"></i>
        </div>
      </div>
      <div className="expeand-centent">
        <div className="expeand-farm mb-20 d-flex align-items-center justify-content-between">
          <div className="farm-form-list">
            <h5 className="mb-18">Deposit</h5>
            <div className="farm-form-area mb-27">
              <input type="text" id="max1" name="max1" placeholder="00.00" />
              <span className="max">MAX</span>
              <div className="black-shape">
                <input type="submit" value="Approve" />
                <span className="hover-shape1"></span>
                <span className="hover-shape2"></span>
                <span className="hover-shape3"></span>
              </div>
            </div>
            <span>Your balance: 156 BNB</span>
          </div>
          <div className="farm-form-list">
            <h5 className="mb-18">Withdraw</h5>
            <div className="farm-form-area mb-27">
              <input type="text" id="max2" name="max2" placeholder="00.00" />
              <span className="max">MAX</span>
              <div className="black-shape">
                <input type="submit" value="Withdraw" />
                <span className="hover-shape1"></span>
                <span className="hover-shape2"></span>
                <span className="hover-shape3"></span>
              </div>
            </div>
            <span>Your balance: 156 LEMA</span>
          </div>
          <div className="farm-form-list">
            <h5 className="mb-18">Pending Rewards</h5>
            <div className="farm-form mb-27">
              <span className="unit">58.99 LEMA</span>
              <input className="submit-active" type="submit" value="Claim" />
            </div>
          </div>
        </div>
        <div className="expeand-menu">
          <ul>
            <li>
              Get LEMA-BNB<i className=" icon-link"></i>
            </li>
            <li>
              View Contract<i className=" icon-link"></i>
            </li>
            <li>
              Unstaking Fee<i className=" icon-info-circle"></i>
            </li>
          </ul>
        </div>
      </div>
      <span className="border-shadow shadow-1"></span>
      <span className="border-shadow shadow-2"></span>
      <span className="border-shadow shadow-3"></span>
      <span className="border-shadow shadow-4"></span>
    </div>
  );
};

export default FarmListItem;
