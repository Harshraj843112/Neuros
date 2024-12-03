import { Parallax } from 'react-parallax';
import FramerMotion2 from "../img/FramerMotion2.pnj.jpg";

const ParallaxScroll = () => {
  return (
    <div className="space-y-10">
      <Parallax
        bgImage={FramerMotion2} // Correct prop name for background image
        bgImageAlt="background"
        strength={300}
      >
        <div className="h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 sm:px-6 md:px-8">
            Parallax Effect
          </h1>
        </div>
      </Parallax>
    </div>
  );
};

export default ParallaxScroll;
