import type { NextPage } from "next";

const HowToParticipateSection: NextPage = () => {
  return (
    <div>
      <div className="pt-130 md-pt-80 heading-area align-items-center d-flex justify-content-between mb-30">
        <div className="sec-heading">
          <div className="sub-inner mb-15">
            <span className="sub-title">3 easy steps</span>
            <img
              className="heading-left-image"
              src="assets/images/icons/steps.png"
              alt="Steps-Image"
            />
          </div>
          <h2 className="title">How to Participate</h2>
        </div>
        <div className="gamfi-btn-area">
          <ul>
            <li>
              <a className="view-more black-shape" href="kyc_process.html">
                <span className="btn-text"> Verify KYC </span>
                <i className="icon-arrow_right"></i>
                <span className="hover-shape1"></span>
                <span className="hover-shape2"></span>
                <span className="hover-shape3"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="participate-area row">
        <div className="col-lg-4">
          <div
            className="participate-item d-flex wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            <div className="number-image">
              <img
                src="assets/images/icons/participate-image.png"
                alt="Participate-Image"
              />
            </div>
            <div className="participate-info">
              <h4 className="mb-10">Submit KYC</h4>
              <p className="description">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="participate-item d-flex wow fadeInUp mr-30"
            data-wow-delay="200ms"
            data-wow-duration="2000ms"
          >
            <div className="number-image">
              <img
                src="assets/images/icons/participate-image2.png"
                alt="Participate-Image"
              />
            </div>
            <div className="participate-info">
              <h4 className="mb-10">Verify Wallet</h4>
              <p className="description">
                Popular belief Ipsum is not simply random text. It has roots in
                a piece of classical
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="participate-item d-flex wow fadeInUp mr-20"
            data-wow-delay="300ms"
            data-wow-duration="2500ms"
          >
            <div className="number-image">
              <img
                src="assets/images/icons/participate-image3.png"
                alt="Participate-Image"
              />
            </div>
            <div className="participate-info">
              <h4 className="mb-10">Start Staking</h4>
              <p className="description">
                Belief norem Isum is not simply random text. It has roots in a
                piece of classical
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToParticipateSection;
