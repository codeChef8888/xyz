/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Link from "next/link";
import ApplyForIGOSection from "../components/ApplyForIGOSection";
import AboutSection from "../components/home/AboutSection";
import CompleteProjectsSection from "../components/home/CompleteProjectsSection";
import NextProjectsSection from "../components/home/NextProjectsSection";
import PartnersSection from "../components/home/PartnersSection";
import TeamSection from "../components/home/TeamSection";
import TokenomicsSection from "../components/home/TokenomicsSection";

const Home: NextPage = () => {
  return (
    <div>
      <div id="sc-banner" className="sc-banner banner-bg position-relative">
        <div className="container">
          <div className="banner-content text-center">
            <img
              className="banner-icon wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2500ms"
              src="assets/images/icons/Earth.png"
              alt="icon-image"
            />
            <h1
              className="banner-title wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2500ms"
            >
              Re-imagining liquidity
            </h1>
            <div
              className="description wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2500ms"
            >
              Bringing liquidity providers together.
            </div>
            <Link href="/projects">
              <a
                className="banner-btn wow fadeInUp black-shape-big"
                data-wow-delay="300ms"
                data-wow-duration="2500ms"
              >
                <span className="btn-text" style={{color: "#fff"}}>Explore Governance</span>
                <span className="hover-shape1"></span>
                <span className="hover-shape2"></span>
                <span className="hover-shape3"></span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <AboutSection />
      <NextProjectsSection />
      <CompleteProjectsSection />
      {/* <TokenomicsSection /> */}
      {/* <TeamSection /> */}
      <PartnersSection />

      <ApplyForIGOSection />
    </div>
  );
};

export default Home;
