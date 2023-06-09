/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

const CompletedIGOItem: NextPage = () => {
  return (
    <div className="col-md-12">
      <div className="previous-mainmenu mb-15">
        <ul className="menu-list">
          <li className="list1">Project name</li>
          <li className="list2">Chain</li>
          <li className="list3">Date Won</li>
          <li className="list4">Total Vote</li>
          <li className="list5">Progress</li>
        </ul>
      </div>
      <Link href="/project-details">
        <a>
          <div className="previous-item hover-shape-border hover-shape-inner">
            <div className="previous-gaming">
              <div className="previous-image">
                <img
                  src="assets/images/project/privius-imagee.png"
                  alt="Previous-Image"
                />
              </div>
              <div className="previous-price">
                <h4 className="mb-10">Ariva</h4>
                <div className="dsc">price (ARV) = 0.89 BUSD</div>
              </div>
            </div>
            <div className="previous-chaining">
              <img
                src="assets/images/project/previous-image.png"
                alt="Chain-Image"
              />
              <span>March 25 2022</span>
            </div>
            <div className="previous-raise">
              <span>100,000 (40%)</span>
              <div className="progress-inner">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
            <span className="border-shadow shadow-1"></span>
            <span className="border-shadow shadow-2"></span>
            <span className="border-shadow shadow-3"></span>
            <span className="border-shadow shadow-4"></span>
            <span className="hover-shape-bg hover_shape1"></span>
            <span className="hover-shape-bg hover_shape2"></span>
            <span className="hover-shape-bg hover_shape3"></span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CompletedIGOItem;
