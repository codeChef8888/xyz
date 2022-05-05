/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";

export interface Props {
  name: string;
  rank: number;
  votes: number;
}

const EpochListItem: NextPage<Props> = (props: Props) => {
  return (
    <div className="col-md-12 my-3 d-flex flex-column game-price-item active-shape hover-shape-inner">
      <div className="winner-container" style={{justifyContent: "space-between", columnGap: "0", background:"none"}}>
        <div className="winner-items" style={{alignItems: "center", width:"100%", justifyContent: "space-between"}}>
          <div className="epoch-heading">
            <img
                  src="assets/images/project/privius-imagee.png"
                  alt="Previous-Image"
                  style={{width: "4rem", height: "4rem"}}
            />
            <div style={{marginTop: "1.5rem"}}>
                <h4 style={{lineHeight: "1.5rem"}}>
                    {props.name}
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
                </h4>
            </div>
          </div>

          <div className="winner">
            <img src="assets/images/project/icon-3.png" alt="icon-image" />
          </div>

          <div className="winner">
            <h1 style={{fontSize: "2rem", fontWeight: "bold", marginTop: "1.5rem"}}>RANK {props.rank}</h1>
          </div>
          
          <div className="winner">
            <div className="responsive-btn-vote">
                <Link href="/project-details">
                    <a 
                    className="black-shape banner-btn"
                    style={{height: "max-content", color: "#fff"}}
                    data-wow-delay="300ms"
                    data-wow-duration="2500ms"
                    >
                    <span>VOTE NOW</span>
                    <span className="hover-shape1"></span>
                    <span className="hover-shape2"></span>
                    <span className="hover-shape3"></span>
                    </a>
                </Link>
            </div>
          </div>
        </div>
      
      </div>
      <div className="progress-inner">
        <div className="progress">
        <div
            className="progress-bar progress-bar-striped"
            role="progressbar"
            aria-valuenow={36}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: `${props.votes}` + "%"}}
        ></div>
        </div>
      </div>
    </div>
  );
};

export default EpochListItem;
