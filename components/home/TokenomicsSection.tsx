/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const TokenomicsSection: NextPage = () => {
  return (
    <div className="gamfi-tokenomics-section tokenomics-left-right-shape pb-115 pt-115 md-pt-75 md-pb-45">
      <div className="container">
        <div className="sec-heading">
          <div className="sub-inner mb-15">
            <span className="sub-title">statistics</span>
            <img
              className="heading-left-image"
              src="assets/images/icons/steps.png"
              alt="Steps-Image"
            />
          </div>
          <h2 className="title">Tokenomics</h2>
        </div>
        <div className="tokenomics-item d-flex">
          <div className="tokenomics-menu pr-60">
            <div className="dsc">Team</div>
            <h5>7.5%</h5>
          </div>
          <div className="tokenomics-menu pr-63">
            <div className="dsc">Staking</div>
            <h5>9.50%</h5>
          </div>
          <div className="tokenomics-menu pr-65">
            <div className="dsc">Advisors</div>
            <h5>10.00%</h5>
          </div>
          <div className="tokenomics-menu pr-95">
            <div className="dsc">Liquidity</div>
            <h5>12.00%</h5>
          </div>
          <div className="tokenomics-menu pr-105">
            <div className="dsc">Ecosystem</div>
            <h5>16.33%</h5>
          </div>
          <div className="tokenomics-menu pr-122">
            <div className="dsc">Marketing</div>
            <h5>18.00%</h5>
          </div>
          <div className="tokenomics-menu">
            <div className="dsc">Private Sale</div>
            <h5>30.00%</h5>
          </div>
        </div>
        <div className="tokenomics-image mb-60 md-mb-40">
          <img
            src="assets/images/project/tokenomices-image.jpg"
            alt="Tokenomics-Image"
          />
        </div>
        <div className="tokenomics-counter">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="counter-info">
                <h4 className="counter-number mb-6">
                  <span className="counter">386</span>
                </h4>
                <h5>Funded Projects</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="counter-info">
                <h4 className="counter-number mb-6">
                  <span className="counter">486</span>
                </h4>
                <h5>Unique Participants</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="counter-info">
                <h4 className="counter-number mb-6">
                  $<span className="counter">9</span>M+
                </h4>
                <h5>Raised Capital</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="counter-info">
                <h4 className="counter-number mb-6">
                  $<span className="counter">18</span>M+
                </h4>
                <h5>Initial Market Cap</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
