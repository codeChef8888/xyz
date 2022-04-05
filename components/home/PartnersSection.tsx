/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const PartnersSection: NextPage = () => {
  return (
    <div className="gamfi-partner-section pb-110 md-pb-80">
      <div className="container">
        <div className="sec-heading text-center">
          <div className="sub-inner mb-55">
            <img
              className="heading-right-image"
              src="assets/images/icons/steps2.png"
              alt="Steps-Image"
            />
            <span className="sub-title white-color">Our partners</span>
            <img
              className="heading-left-image"
              src="assets/images/icons/steps.png"
              alt="Steps-Image"
            />
          </div>
        </div>
        <div className="gamfi-partner-inner">
          <div className="partner-image">
            <a href="#">
              <img
                src="assets/images/partner/partner-image.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image2.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image3.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image4.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image5.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image6.png"
                alt="Partner-Image"
              />
            </a>
          </div>
          <div className="partner-image">
            <a href="#">
              <img
                src="assets/images/partner/partner-image.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image2.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image3.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image4.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image5.png"
                alt="Partner-Image"
              />
            </a>
            <a href="#">
              <img
                src="assets/images/partner/partner-image6.png"
                alt="Partner-Image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
