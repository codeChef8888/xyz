import type { NextPage } from "next";

const SubscribeSection: NextPage = () => {
  return (
    <div className="gamfi-footer-section">
      <div className="container">
        <div className="footer-cta-area footer-cta-form text-center active-shape hover-shape-inner">
          <h2 className="title mb-15">
            Get alerts{" "}
            <span>
              <img src="assets/images/icons/sms.png" alt="" />
            </span>{" "}
            for new IGOs & IDOs
            <br />
          </h2>
          <div className="dsc mb-44">
            Sign up for newsletter to get more IGO/IDO News and Updates
          </div>
          <div className="footer-link">
            <form>
              <input type="email" name="email" placeholder="Email Address" />
              <div className="black-shape subscribe">
                <input type="submit" value="Subscribe" />
                <span className="hover-shape1"></span>
                <span className="hover-shape2"></span>
                <span className="hover-shape3"></span>
              </div>
            </form>
          </div>
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
export default SubscribeSection;
