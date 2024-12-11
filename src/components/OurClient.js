import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Correct import

import AiimsDelhi from "../img/AIIMS_New_Delhi.png";
import Sharda from "../img/sharda.jpg";
import Amazon from "../img/Amazon.png";
import Patna from "../img/Aiims Patna.png";
import Appolo from "../img/Apollo.png";
import GangaRam from "../img/GangaRam.png";
import RedClif from "../img/RadClif.png";
import Jodhpur from "../img/Jodhpur.png";
import Rishikesh from "../img/Rishikesh.png";
import Psri from "../img/Psri.png";

// Reusable Component for Logo Items
const ClientLogo = ({ src, alt }) => (
  <div className="flex justify-center items-center mx-auto w-32 h-32 lg:w-40 lg:h-40">
    <img src={src} alt={alt} className="object-contain w-full h-full" />
  </div>
);

const OurClient = () => {
  return (
    <div className="bg-white py-10">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-wide mb-4">
          <span className="text-customGreen mr-2">Our</span>
          <span className="text-customBlueDark">Clientele</span>
        </h2>
      </div>

      <div className="w-11/12 mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          modules={[Autoplay]}
          autoplay={{
            delay: 0, // No delay for continuous sliding
            disableOnInteraction: false, // Ensure autoplay continues after interaction
          }}
          speed={3000} // Adjust for smoothness
          loop={true} // Infinite loop
          freeMode={true} // Continuous non-snapping movement
          breakpoints={{
            // Desktop and large screens
            1200: {
              slidesPerView: 6,
            },
            // Tablets and large screens
            1024: {
              slidesPerView: 5,
            },
            // Small tablets and large mobile
            768: {
              slidesPerView: 3,
            },
            // Mobile landscape
            480: {
              slidesPerView: 3,
            },
            // Small mobile screens
            320: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <ClientLogo src={AiimsDelhi} alt="AIIMS Delhi" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={Amazon} alt="Amazon Pharmacy" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={Patna} alt="AIIMS Patna" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={Psri} alt="PSRI Hospital" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={Appolo} alt="Apollo Hospital" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={GangaRam} alt="Sir Ganga Ram Hospital" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={Jodhpur} alt="AIIMS Jodhpur" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={Sharda} alt="Sharda Hospital" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={RedClif} alt="Redcliffe Diagnostics" />
          </SwiperSlide>
          <SwiperSlide>
            <ClientLogo src={Rishikesh} alt="AIIMS Rishikesh" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurClient;
