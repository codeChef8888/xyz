/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import EpochListItem from "../components/projects/EpochListItem";

const data = [
    {
        name: "Ariva",
        rank: 1,
        votes: "181000",
    },
    {
        name: "Render",
        rank: 2,
        votes: "81158",
    },
    {
        name: "Neo",
        rank: 3,
        votes: "55123",
    },
]

const EpochView: NextPage = () => {
    const getHighest = () => {
        let highest = 0;
        for (let i = 0; i < data.length; i++) {
            if (parseInt(data[i].votes) > highest) {
                highest = parseInt(data[i].votes);
            }
        }
        return highest;
    }
    const getPercentage = (votes: number) => {
        const highest = getHighest();
        let votePercentage = (votes / highest) * 100;   
        return votePercentage;  
    }
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
                {
                    data.sort((a, b) => b.rank - a.rank).map((item, index) => (
                        <EpochListItem 
                            name={item.name}
                            rank={item.rank}
                            votes={getPercentage(parseInt(item.votes))}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default EpochView;