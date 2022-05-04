/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

const CompletedIGOItem: NextPage = () => {
  return (
    <div className="col-md-12">
      <div className="winner-container">
        <div>
          <h1>EPOCH 3</h1>
        </div>
        <div className="winner-items">
          <div className="winner" style={{alignItems: "center"}}>
            <h2>Winner</h2>
            <img
                  src="assets/images/project/privius-imagee.png"
                  alt="Previous-Image"
            />
          </div>

          <div className="winner">
            <h2>Total Vote</h2>
            <h3>100,000</h3>
          </div>

          <div className="winner">
            <h2>DEX</h2>
            <h3>Uniswap</h3>
          </div>

          <div className="winner">
            <h2>Prize</h2>
            <h3>XXX</h3>
          </div>

          <div className="winner">
            <h2>Status</h2>
            <h3>100%</h3>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CompletedIGOItem;
