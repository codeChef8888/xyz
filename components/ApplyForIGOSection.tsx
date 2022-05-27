import type { NextPage } from "next";
import Link from "next/link";

const ApplyForIGOSection: NextPage = () => {
  return (
    <div className="gamfi-footer-section">
      <div className="container">
        <div className="footer-cta-area text-center active-shape hover-shape-inner">
          <h2 className="title mb-15">
            Apply for lemmatron
            <br />
            liquidity governance
          </h2>
          <div className="dsc mb-40 md-mb-30">
            Please go to the link below and submit the form.
          </div>
          <Link href="/apply-for-liquidity">
            <a
              className="banner-btn wow fadeInUp black-shape"
              data-wow-delay="300ms"
              data-wow-duration="2500ms"
            >
              <span className="btn-text" style={{color: "#fff"}}>Apply For governance</span>
              <span className="hover-shape1"></span>
              <span className="hover-shape2"></span>
              <span className="hover-shape3"></span>
            </a>
          </Link>
          <span className="border-shadow shadow-1"></span>
          <span className="border-shadow shadow-2"></span>
          <span className="border-shadow shadow-3"></span>
          <span className="border-shadow shadow-4"></span>
          <span className="hover-shape-bg hover_shape1"></span>
          <span className="hover-shape-bg hover_shape2"></span>
          <span className="hover-shape-bg hover_shape3"></span>
        </div>
      </div>
    </div>
  );
};
export default ApplyForIGOSection;
