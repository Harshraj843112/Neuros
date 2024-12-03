import React from "react";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import LeftLogo from "../img/Logo (1).png";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Half */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={LeftLogo}
            alt="Left Decorative Logo"
            className="h-56 w-56 sm:h-72 sm:w-72 md:h-96 md:w-96 opacity-80 -ml-4"
          />
        </div>

        {/* Right Half */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Heading */}
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-snug sm:leading-normal space-y-3 sm:space-y-4 whitespace-nowrap">
            <div>Unleashing the Potential of</div>
            <div>
              <span className="text-red-500 whitespace-nowrap">
                Artificial Intelligence for
              </span>
            </div>
            <div>
              <span className="text-blue-500">Intelligent Solutions</span>
            </div>
          </div>

          {/* Logos Section */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 mt-8 sm:mt-10">
            {/* Logo 1 */}
            <img
              src={logo1}
              alt="Metriks Data Center"
              className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Logo 2 */}
            <img
              src={logo2}
              alt="QUO Legal Firm"
              className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Logo 3 */}
            <img
              src={logo3}
              alt="Agrimax"
              className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Logo 4 */}
            <img
              src={logo4}
              alt="VS Studio"
              className="h-8 sm:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
