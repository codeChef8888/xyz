import type { NextPage } from "next";
import SubscribeSection from "../components/SubscribeSection";

const ApplyForIGO: NextPage = () => {
  return (
    <div>
      <div className="gamfi-breadcrumbs-section">
        <div className="container">
          <div className="apply-heading text-center">
            <h2 className="mb-0">Apply for Liquidity</h2>
          </div>
        </div>
      </div>
      <div className="gamfi-form-content pt-65 md-pt-45 pb-120 md-pb-80">
        <div className="container">
          <div className="address-form">
            <form>
              <div className="input-button">
                <input
                  type="text"
                  id="project"
                  placeholder="Project Name"
                  required
                />
                <label htmlFor="project">Project Name</label>
              </div>
              <div className="input-button">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="input-button">
                <input
                  type="text"
                  id="brief"
                  className="brief"
                  placeholder="Project Brief"
                  required
                />
                <label htmlFor="brief">Project Brief</label>
              </div>
              <div className="radio-button">
                <h5 className="mt-35">Blockchain/Platform</h5>
                <div className="input-list">
                  <input
                    type="radio"
                    id="binance"
                    name="fav_language"
                    value="Binance Smart Chain"
                  />
                  <label htmlFor="binance">Binance Smart Chain</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="solana"
                    name="fav_language"
                    value="Solana"
                  />
                  <label htmlFor="solana">Solana</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="ethereum"
                    name="fav_language"
                    value="Ethereum"
                  />
                  <label htmlFor="ethereum">Ethereum</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="polkadot"
                    name="fav_language"
                    value="Polkadot"
                  />
                  <label htmlFor="polkadot">Polkadot</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="polygon"
                    name="fav_language"
                    value="Polygon (Matic)"
                  />
                  <label htmlFor="polygon">Polygon (Matic)</label>
                  <div className="check"></div>
                </div>
                <h5 className="mt-25">Project status</h5>
                <div className="input-list">
                  <input
                    type="radio"
                    id="idea"
                    name="fav_language"
                    value="Just an initial idea"
                  />
                  <label htmlFor="idea">Just an initial idea</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="paper"
                    name="fav_language"
                    value="Idea with White Paper"
                  />
                  <label htmlFor="paper">Idea with White Paper</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="development"
                    name="fav_language"
                    value="In early development"
                  />
                  <label htmlFor="development">In early development</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="launch"
                    name="fav_language"
                    value="Ready to launch"
                  />
                  <label htmlFor="launch">Ready to launch</label>
                  <div className="check"></div>
                </div>
                {/* <h5 className="mt-30 mb-22">Have you already raised funds ?</h5>
                <div className="input-list">
                  <input
                    type="radio"
                    id="yes"
                    name="fav_language"
                    value="Yes"
                  />
                  <label htmlFor="yes">Yes</label>
                  <div className="check"></div>
                </div> */}
                <div className="input-list">
                  <input type="radio" id="no" name="fav_language" value="No" />
                  <label htmlFor="no">No</label>
                  <div className="check"></div>
                </div>
                <h5 className="mt-34 mb-22">Is your team Anon or public</h5>
                <div className="input-list">
                  <input
                    type="radio"
                    id="anon"
                    name="fav_language"
                    value="Anon"
                  />
                  <label htmlFor="anon">Anon</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="public"
                    name="fav_language"
                    value="Fully Public"
                  />
                  <label htmlFor="public">Fully Public</label>
                  <div className="check"></div>
                </div>
                <div className="input-list">
                  <input
                    type="radio"
                    id="mixed"
                    name="fav_language"
                    value="Mixed"
                  />
                  <label htmlFor="mixed">mixed</label>
                  <div className="check"></div>
                </div>
              </div>
              {/* <div className="input-button">
                <input
                  type="text"
                  id="target"
                  placeholder="How much are you planning on raising on the IGO?"
                  required
                />
                <label htmlFor="target">Target Raise</label>
              </div> */}
              <div className="input-button">
                <input
                  type="text"
                  id="website"
                  placeholder="Enter link"
                  required
                />
                <label htmlFor="website">
                  Project Website / Link to whitepaper
                </label>
              </div>
              <div className="input-button group">
                <i className="icon-telegram"></i>
                <input
                  type="text"
                  className="enter"
                  id="telegram"
                  name="telegram"
                  placeholder="Enter Telegram group link"
                  required
                />
                <label htmlFor="telegram">Telegram group</label>
              </div>
              <div className="input-button">
                <i className="icon-twitter"></i>
                <input
                  type="text"
                  className="enter"
                  id="twitter"
                  name="twitter"
                  placeholder="Enter Twitter account link"
                  required
                />
                <label htmlFor="twitter">Project Twitter</label>
              </div>
              <div className="input-button">
                <i className="icon-discord"></i>
                <input
                  type="text"
                  className="enter"
                  id="twitter"
                  name="twitter"
                  placeholder="Enter Discord server link"
                  required
                />
                <label htmlFor="twitter">Project Discord</label>
              </div>
              <div className="project-btn-area text-center black-shape-big mt-40">
                <input type="submit" name="submit" value="Submit My Project" />
                <span className="hover-shape1"></span>
                <span className="hover-shape2"></span>
                <span className="hover-shape3"></span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SubscribeSection />
    </div>
  );
};

export default ApplyForIGO;
