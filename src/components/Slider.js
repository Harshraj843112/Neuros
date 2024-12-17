import React, { useState, useEffect, useRef } from "react";
import AliceCarousel from "react-alice-carousel"; // For carousel behavior
import "react-alice-carousel/lib/alice-carousel.css"; // AliceCarousel CSS
import "animate.css"; // For slide-in animations
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Your Image Import
import FramerMotion2 from "../img/Presentation1_page-0001.jpg";

// Slide Data
const slides = [
  {
    title: "Harness the Power <br> of GudMed AI",
    gradientWords: ["GudMed", "AI"],
    gradient: "bg-gradient-to-r from-blue-400 via-green-500 to-teal-500",
  },
  {
    title:
      "Revolutionize patient care with <br> cutting-edge Artificial Intelligence <br> tailored for hospitals and<br>  healthcare providers .",
    gradientWords: ["Artificial", "Intelligence","providers"],
    gradient: "bg-gradient-to-r from-blue-400 via-green-500 to-teal-500",
  },
  {
    title: "Unlock these Benefits",
    gradientWords: ["Benefits"],
    gradient: "bg-gradient-to-r from-blue-400 via-green-500 to-teal-500",
    benefits: [
      {
        heading: "Improved Decision-Making:",
        description: "Make real-time, data-driven decisions for better patient outcomes.",
        gradient: "bg-gradient-to-r from-blue-400 via-green-500 to-teal-500",
      },
      {
        heading: "Predictive Analytics:",
        description: "Anticipate patient needs with precision for proactive care.",
        gradient: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",
      },
      {
        heading: "Automation:",
        description: "Streamline processes from discharge summaries to prescription digitization.",
        gradient: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
      },
    ],
  },
  {
    title:
      "Explore how GudMed is <br> transforming healthcare  <br>one innovation at a time.",
    gradientWords: ["GudMed", "transforming", "innovation","healthcare" ],
  },
];

const Slider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const carouselRef = useRef();

  const carouselSettings = {
    autoPlay: true,
    autoPlayInterval: 3000, // Text changes every 3 seconds
    infinite: true,
    disableButtonsControls: true, // Hide default controls
    disableDotsControls: true,
    onSlideChanged: (e) => {
      setCurrentSlideIndex(e.item);
    },
    responsive: {
      0: {
        items: 1, // 1 slide on mobile
      },
      768: {
        items: 1, // 2 slides on tablet
      },
      1024: {
        items: 1, // 3 slides on laptop and desktop
      },
    },
  };

  // Handle Next Slide
  const handleNext = () => {
    carouselRef.current?.slideNext();
  };

  // Handle Previous Slide
  const handlePrev = () => {
    carouselRef.current?.slidePrev();
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Text Carousel Section */}
      <div className="relative w-full px-4 py-0 sm:py-24 -mt-40 md:mt-8 flex flex-col items-center">
        <div className="relative w-full">
          {/* AliceCarousel for Text Transition */}
          <AliceCarousel
            ref={carouselRef}
            {...carouselSettings}
            activeIndex={currentSlideIndex}
            items={slides.map((slide, index) => (
              <div
                className="text-container animate__animated animate__slideInRight animate__faster"
                key={index}
              >
                <h1 className="text-gray-800 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight">
                  {/* Title with animation */}
                  {slide.title.split(/<br\s*\/?>/).map((chunk, i) => (
                    <React.Fragment key={i}>
                      {chunk.split(" ").map((word, j) =>
                        slide.gradientWords?.includes(word) ? (
                          <span
                            key={`${i}-${j}`}
                            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate__animated animate__slideInRight"
                            style={{
                              WebkitBackgroundClip: "text",
                              color: "transparent",
                            }}
                          >
                            {`${word} `}
                          </span>
                        ) : (
                          `${word} `
                        )
                      )}
                      {i < slide.title.split(/<br\s*\/?>/).length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h1>

                {/* Benefits Section */}
                {slide.benefits && (
                  <ul className="mt-8 space-y-4 px-4 sm:px-8 lg:px-16">
                    {slide.benefits.map((benefit, i) => (
                      <li key={i} className="text-base sm:text-lg lg:text-xl text-gray-700 text-center">
                        <span
                          className={`${benefit.gradient} text-transparent bg-clip-text font-semibold`}
                          style={{
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {benefit.heading}
                        </span>{" "}
                        {benefit.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4  top-[120px] md:top-[200px] transform -translate-y-1/2 bg-[#2E4168] w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        >
          <FaChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-[120px] md:top-[200px] transform -translate-y-1/2 bg-[#2E4168] w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Static Image Section */}
      <div className="w-full flex justify-center mt-8 px-4">
        <div
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[600px] bg-cover bg-center rounded-lg shadow-md"
          style={{ backgroundImage: `url(${FramerMotion2})` }}
        ></div>
      </div>
    </div>
  );
};

export default Slider;
