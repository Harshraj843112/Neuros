import React from "react";
import Marquee from "react-fast-marquee";
import FramerMotionImage from "../img/FramerMotion2.pnj.jpg"

const AnimatedText = () => {
  return (
    <div className="relative h-60">
      {/* Black background with left-to-right moving text */}
      <div
        className="bg-black h-20 flex items-center absolute top-0 left-0 w-full"
        style={{
          transform: "rotate(-2deg) translateY(-10px)", // Black rotated and shifted
          zIndex: 1, // Behind the red container
        }}
      >
        <Marquee speed={60} gradient={false} direction="left">
          <span className="text-4xl font-bold text-white px-8">
            Shaping the future of technology / Artificial Intelligence&nbsp;
          </span>
          <span className="text-4xl font-bold text-white px-8">
            Shaping the future of technology / Artificial Intelligence&nbsp;
          </span>
        </Marquee>
      </div>

      {/* Red background with right-to-left moving text */}
      <div
        className="bg-[#FF4C4C] h-20 flex items-center absolute top-8 left-0 w-full"
        style={{
          transform: "rotate(2deg) translateY(-100px)", // Red rotated and shifted
          zIndex: 2, // Above the black container
        }}
      >
        <Marquee speed={60} gradient={false} direction="right">
          <span className="text-4xl font-bold text-black px-8">
            Shaping the future of technology / Artificial Intelligence&nbsp;
          </span>
          <span className="text-4xl font-bold text-black px-8">
            Shaping the future of technology / Artificial Intelligence&nbsp;
          </span>
        </Marquee>
      </div>
    </div>
  );
};

export default AnimatedText;
