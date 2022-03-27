import type { NextPage } from "next";
import Link from "next/link";
import ApplyForIGOSection from "../components/ApplyForIGOSection";

const Leaderboard: NextPage = () => {
  return (
    <div>
      <div className="gamfi-breadcrumbs-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="breadcrumbs-area sec-heading">
                <div className="sub-inner mb-15">
                  <Link href="/">
                    <a className="breadcrumbs-link">Home</a>
                  </Link>
                  <span className="sub-title">Leaderboard</span>
                  <img
                    className="heading-left-image"
                    src="assets/images/icons/steps.png"
                    alt="Steps-Image"
                  />
                </div>
                <h2 className="title mb-0">Leaderboard</h2>
              </div>
            </div>
            <div className="col-lg-7 breadcrumbs-form mr-0 md-pt-30">
              <form>
                <input
                  type="text"
                  id="Search"
                  name="search"
                  placeholder="Search by name, token, address"
                />
                <span className="submit">
                  <i className="icon-search"></i>
                  <input type="submit" />
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="leaderboard-table-list pb-140 md-pb-80 pt-55">
        <div className="container">
          <table>
            <tbody>
              <tr>
                <th># RANK</th>
                <th>Name</th>
                <th>Public Key</th>
                <th>locked</th>
                <th>Balance</th>
              </tr>
              <tr>
                <td>01</td>
                <td>RolexDeo</td>
                <td>0x95e441....ddd97400</td>
                <td>365 Days</td>
                <td>$305,626.99</td>
              </tr>
              <tr>
                <td>02</td>
                <td>Doris S. Bohr</td>
                <td>0x842db9....c03d141f</td>
                <td>185 Days</td>
                <td>$50,899.00</td>
              </tr>
              <tr>
                <td>03</td>
                <td>Melissa Freeman</td>
                <td>0x8de8be....48be4556</td>
                <td>90 Days</td>
                <td>$258,69.28</td>
              </tr>
              <tr>
                <td>04</td>
                <td>HazelFeltman</td>
                <td>0xb83166....a9a8dc0d</td>
                <td>60 Days</td>
                <td>$33,855.90</td>
              </tr>
              <tr>
                <td>05</td>
                <td>Sally A. Martinez</td>
                <td>0x8637ab....a1b8674a</td>
                <td>365 Days</td>
                <td>$305,626.99</td>
              </tr>
              <tr>
                <td>06</td>
                <td>Hilda Dekker</td>
                <td>0x95e441....ddd97400</td>
                <td>365 Days</td>
                <td>$305,626.99</td>
              </tr>
            </tbody>
          </table>
          <div className="gamfi-navigation text-center mt-40">
            <ul>
              <li>
                <a href="#">
                  <i className="icon-Vector"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a className="active" href="#">
                  2
                </a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-arrow_right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ApplyForIGOSection />
    </div>
  );
};

export default Leaderboard;
