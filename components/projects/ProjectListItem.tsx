/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

const ProjectListItem: NextPage = () => {
  return (
    <div className="col-md-12">
      <Link href="/project-details">
        <a>
          <div className="previous-item hover-shape-border hover-shape-inner">
            <div className="previous-gaming">
              <div className="previous-image">
                <img
                  src="assets/images/project/privius-image2.png"
                  alt="Previous-Image"
                />
              </div>
              <div className="previous-price">
                <h4 className="mb-10">KyberDyne</h4>
                <div className="dsc">price (FSC) = 0.89 BUSD</div>
              </div>
            </div>
            <div className="previous-chaining">
              <img
                src="assets/images/project/previous-image2.png"
                alt="Chain-Image"
              />
              <div className="counter-info">
                <ul>
                  <li>
                    <span className="counter">0</span>D
                  </li>
                  <li>
                    <span className="counter">12</span>H
                  </li>
                  <li>
                    <span className="counter">15</span>M
                  </li>
                  <li>
                    <span className="counter">58</span>S
                  </li>
                </ul>
              </div>
            </div>
            <div className="previous-raise">
              <span>100,000 BUSD (85%)</span>
              <div className="progress-inner">
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    aria-valuenow={85}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "85%" }}
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

export default ProjectListItem;
