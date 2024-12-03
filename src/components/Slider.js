import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";

// Import your images
import FramerMotion1 from "../img/FramerMotion1.pnj.jpg";
import FramerMotion2 from "../img/Presentation1_page-0001.jpg";

// Define the slides with titles and gradient words
const slides = [
  {
    image: FramerMotion1,
    title: "Revolutionize your business <br/> with cutting-edge Neural <br/> Network solutions",
    gradientWords: ["Neural", "Network"],
    textOverlay: false, // Text overlays the image

  },
  {
    image: FramerMotion2,
    title: "Harness the <br/> Power of Artificial <br/> Intelligence",
    gradientWords: ["Artificial", "Intelligence"],
    textOverlay: false, // Text is above the image
    description: "Highlight the potential benefits of Neural Networks,<br/> such as improved decision-making, predictive analytics,<br/> and automation..",
  },
];

const Slider = () => {
  // Animation Variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className="w-full max-w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Text above the image */}
            <motion.div
              className="relative w-9/12  mx-auto px-6 py-28    flex flex-col lg:flex-row items-start lg:items-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Title Section */}
              <div className="w-full  mb-4 lg:mb-0">
                <h1 className="text-gray-800 text-center lg:text-left text-4xl lg:text-8xl font-semibold">
                  {slide.title.split(" ").map((word, i) =>
                    slide.gradientWords.includes(word) ? (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
                      >
                        {`${word} `}
                      </span>
                    ) : word === "<br/>" ? (
                      <br key={i} />
                    ) : (
                      `${word} `
                    )
                  )}
                </h1>

              </div>

              {/* Description Section */}
              {/* Description Section */}
{slide.description && (
  <div className="w-10/12 flex flex-col lg:w-1/2 text-black  text-sm lg:text-base px-4">
    <p
      dangerouslySetInnerHTML={{
        __html: slide.description.replace(/\n/g, "<br/>"),
      }}
    ></p>
    {/* Button Section */}
    <div className="mt-4 flex">
      <button className="bg-black text-white py-2 px-6 rounded-md transition-all duration-300 hover:bg-red-600 text-center flex  items-start justify-start">
        Discover
      </button>
    </div>
  </div>
)}


            </motion.div>

            {/* Image */}
            <div
              className="relative w-full h-[800px] bg-cover bg-center object-cover ml-8 bg-gray-100"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
