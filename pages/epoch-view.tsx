/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import EpochListItem from "../components/projects/EpochListItem";

const EpochView: NextPage = () => {
    return (
        <div className="d-flex flex-column">
            <div className="gamfi-breadcrumbs-section" style={{marginBottom: "1rem"}}>
                <div className="container">
                    <div className="row">
                        <div className="breadcrumbs-area sec-heading">
                            <div className="sub-inner">
                                <Link href="/projects">
                                    <a className="breadcrumbs-link">Government</a>
                                </Link>
                                <span className="sub-title">Past Government</span>
                                <img
                                    className="heading-left-image"
                                    src="assets/images/icons/steps.png"
                                    alt="Steps-Image"
                                />
                            </div>
                        </div>
                        <h1 style={{fontSize: "2rem", fontWeight: "bold"}}>EPOCH - 1</h1>

                        <div className="sub-inner epoch-details">
                            <p>Start Date: <span>2021/08/21</span></p>
                            <p>End Date: <span>2021/09/21</span></p>
                            <p>Winner: <span>Render</span></p>
                            <p>Prize: <span>$5016.55</span></p>
                            <p>Status: <span>Directed</span></p>
                            <p>Transaction Id: <span>0x8.........146</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{zIndex: "20"}}>
                <EpochListItem />
                <EpochListItem />
                <EpochListItem />
            </div>
        </div>
    )
}

export default EpochView;