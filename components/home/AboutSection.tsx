import type { NextPage } from "next";

import dynamic from "next/dynamic";
import HomeCarouselItem from "./items/HomeCarouselItem";
import HowToParticipateSection from "./HowToParticipateSection";

const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const AboutSection: NextPage = () => {
  return (
    <div className="gamfi-about-secion pb-80 md-pb-45">
      <div className="container">
        <div className="banner-slider-inner">
          <OwlCarousel
            className="sc-carousel owl-carousel"
            loop={true}
            lazyLoad={true}
            items={1}
            margin={70}
            autoplay={true}
            autoplayHoverPause={true}
            autoplayTimeout={5000}
            smartSpeed={1500}
            dots={true}
            nav={false}
            navSpeed={true}
            center={false}
            navText={[
              "<i class='flaticon flaticon-left-arrow'></i>",
              "<i class='flaticon flaticon-right-arrow'></i>",
            ]}
            responsiveClass={true}
            responsive={{
              0: {
                items: 1,
                nav: false,
                dots: true,
                center: false,
              },
              768: {
                items: 1,
                nav: false,
                dots: false,
                center: false,
              },
              992: {
                items: 1,
                nav: false,
                dots: true,
                center: false,
              },
              1025: {
                items: 1,
                nav: false,
                dots: true,
              },
            }}
          >
            <HomeCarouselItem />
            <HomeCarouselItem />
            <HomeCarouselItem />
            <HomeCarouselItem />
          </OwlCarousel>
        </div>

        {/* <HowToParticipateSection /> */}
      </div>
    </div>
  );
};
export default AboutSection;
