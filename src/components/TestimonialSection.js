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
                <div className="h-[600px] flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Parallax Effect</h1>
                </div>
            </Parallax>

           
        </div>
    );
};

export default ParallaxScroll;