import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

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
  const clients = [
    { src: AiimsDelhi, alt: "AIIMS Delhi" },
    { src: Patna, alt: "AIIMS Patna" },
    { src: Jodhpur, alt: "AIIMS Jodhpur" },
    { src: Rishikesh, alt: "AIIMS Rishikesh" },
    { src: Amazon, alt: "Amazon Pharmacy" },
    { src: GangaRam, alt: "Sir Ganga Ram Hospital" },
    { src: Psri, alt: "PSRI Hospital" },
    { src: RedClif, alt: "Redcliffe Diagnostics" },
    { src: Sharda, alt: "Sharda Hospital" },
    { src: Appolo, alt: "Apollo Hospital" },
  ];

  return (
    <div className="bg-white py-10">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-wide mb-4 space-x-4">
          <span className="text-[#2E4168] mr-2">Our</span>
          <span className="text-[#2E4168]">Clientele</span>
        </h2>
      </div>

      <div className="w-11/12 mx-auto">
        <Swiper
          spaceBetween={14}
          slidesPerView={4} // Show 4 slides at a time
          slidesPerGroup={4} // Move 1 slide at a time
          modules={[Autoplay]}
          autoplay={{
            delay: 0, // No delay for continuous sliding
            disableOnInteraction: false, // Keep autoplay active even after interaction
          }}
          speed={3000} // Faster sliding speed
          loop={true} // Enable infinite loop
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 2,
            },
            320: {
              slidesPerView: 2,
            },
          }}
        >
          {clients.concat(clients).map((client, index) => (
            <SwiperSlide key={index}>
              <ClientLogo src={client.src} alt={client.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurClient;
