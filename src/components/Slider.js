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
    description:
      "Highlight the potential benefits of Neural Networks,<br/> such as improved decision-making, predictive analytics,<br/> and automation.",
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
              className="relative w-full sm:w-10/12 mx-auto px-4 py-12 sm:py-20 md:py-28 flex flex-col lg:flex-row items-start lg:items-center"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Title Section */}
              <div className="w-full mb-6 lg:mb-0">
                <h1 className="text-gray-800 text-center lg:text-left text-4xl sm:text-4xl lg:text-8xl font-semibold leading-tight">
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
              {slide.description && (
                <div className="w-full lg:w-1/2 text-gray-800 text-center lg:text-left text-sm sm:text-base px-4">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: slide.description.replace(/\n/g, "<br/>"),
                    }}
                  ></p>
                  <div className="mt-6 flex justify-center lg:justify-start">
                    <button className="bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-all duration-300 hover:bg-red-600">
                      Discover
                    </button>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Image */}
            <div
              className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[800px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
