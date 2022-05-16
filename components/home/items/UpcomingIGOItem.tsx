/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import { TiArrowBack } from "react-icons/ti";

const UpcomingIGOItem: NextPage = () => {
  const [upvotes, setUpvotes] = useState(249);
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
    if(!like) {
      setUpvotes(upvotes + 1);
    }
    else{
      setUpvotes(upvotes - 1);
    }
  }

  return (
    <div className="col-lg-4 col-md-6">
      <div className="project-item hover-shape-border project-card">
        <div className="project-info d-flex">
          <Link href="/project-details">
            <a>
              <img
                src="assets/images/project/project-imagee.png"
                alt="Project-Image"
              />
            </a>
          </Link>
          <div className="project-auother">
            <h4 className="mb-10">
              <Link href="/project-details">
                <a>Render</a>
              </Link>
            </h4>
            <div className="dsc">
              <ul className="social-icon-list" style={{display: "flex", columnGap: "1.5rem"}}>
                <li>
                  <a href="#">
                    <i className="icon-telegram" style={{fontSize: "0.75rem"}}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter" style={{fontSize: "0.75rem"}}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-discord" style={{fontSize: "0.75rem"}}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-medium" style={{fontSize: "0.75rem"}}></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-world" style={{fontSize: "0.75rem"}}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-content">
          <div className="project-header d-flex justify-content-between">
            <div className="heading-title">
              <h4>21 Days Left</h4>
            </div>
            <div className="project-icon">
              <img
                src="assets/images/project/project-single-image.png"
                alt="Project-Image"
              />
            </div>
          </div>
          <div className="project-media">
            <ul className="project-listing">
              {/* <li>
                Min allocation <span>0.33 BUSD</span>
              </li> */}
              <li>
                Total Vote <span>20,673.70</span>
              </li>
              <li>
                Percentage <span>36%</span>
              </li>
              <li>
                Preferred DEX <span>Uniswap</span>
              </li>
              <li>
                Price <span>1.30 BUSD</span>
              </li>
              <li>
                <div className="projectCard-vote">
                {
                    upvotes <= 249 ? (
                      <>
                        <input placeholder="0.00" style={{padding: "0.25rem 1rem", border: "1px solid #aeaeae"}}/>
                        <button disabled className="black-shape" style={{backgroundColor: "#aeaeae", cursor: "not-allowed"}}>
                          <span>VOTE</span>
                          <span className="hover-shape1"></span>
                          <span className="hover-shape2"></span>
                          <span className="hover-shape3"></span>
                        </button> 
                      </>
                    )
                    :
                    (
                      <>
                        <input placeholder="0.00" style={{padding: "0.25rem 1rem"}}/>
                        <button className="black-shape">
                          <span>VOTE</span>
                          <span className="hover-shape1"></span>
                          <span className="hover-shape2"></span>
                          <span className="hover-shape3"></span>
                        </button> 
                      </>
                    )
                  }
                </div>
              </li>
            </ul>
          </div>
          
          <div className="progress-inner" style={{margin: "1rem 0"}}>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                aria-valuenow={36}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "36%" }}
              ></div>
            </div>
          </div>
        </div>
        <span className="border-shadow shadow-1"></span>
        <span className="border-shadow shadow-2"></span>
        <span className="border-shadow shadow-3"></span>
        <span className="border-shadow shadow-4"></span>
        <div className="likes">
          {
            !like ? 
            (
              <TiArrowBack style={{fontSize: "1.5rem", color: "white", transform: "rotate(90deg)"}} onClick={handleLike}/>
            )
            : 
            (
              <TiArrowBack style={{fontSize: "1.5rem", color: "#0DB2FF", transform: "rotate(90deg)"}}  onClick={handleLike}/>
            )
          }
          <p>{upvotes}</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingIGOItem;
