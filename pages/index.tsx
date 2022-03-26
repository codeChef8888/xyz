import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      {/* <!-- Banner Section Start --> */}
        <div id="sc-banner" className="sc-banner banner-bg position-relative">
            <div className="container">
                <div className="banner-content text-center">
                    <img className="banner-icon wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2500ms" src="assets/images/icons/icon1.png" alt="icon-image"/>
                    <h1 className="banner-title wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2500ms">
                        Metaverse Web 3.0 Gaming Launcepad & IGO
                    </h1>
                    <div className="description wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2500ms">
                        The next generation gaming ecosystem for IGOs and NFT
                    </div>
                    <a className="banner-btn wow fadeInUp black-shape-big" data-wow-delay="300ms" data-wow-duration="2500ms" href="explore.html">
                        <span className="btn-text">Explore IGO</span>
                        <span className="hover-shape1"></span>
                        <span className="hover-shape2"></span>
                        <span className="hover-shape3"></span>
                    </a>
                </div>
            </div>
        </div>
        {/* <!-- Banner Section End --> */}
    </div>
  );
};

export default Home;
