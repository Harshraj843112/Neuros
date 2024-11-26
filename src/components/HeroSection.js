import React from "react";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import LeftLogo from "../img/Logo (1).png";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        {/* Left Half */}
        <div className="w-full md:w-1/2 flex items-start justify-start">
          <img
            src={LeftLogo}
            alt="Left Decorative Logo"
            className="h-96 w-96 opacity-80 -ml-52"
          />
        </div>

        {/* Right Half */}
        <div className="w-full md:w-1/2">
          {/* Heading */}
          <div className="text-7xl font-bold text-gray-800 md:text-6xl leading-loose space-y-4">
  <div className="whitespace-nowrap">Unleashing the Potential of</div>
  <div className="whitespace-nowrap">
    <span className="text-red-500">Artificial Intelligence</span> for
  </div>
  <div>
    <span className="text-blue-500">Intelligent Solutions</span>
  </div>
</div>

          {/* Logos Section */}
          <div className="flex items-start justify-start md:justify-start mt-10 space-x-24">
            {/* Logo 1 */}
            <img
              src={logo1}
              alt="Metriks Data Center"
              className="h-10 opacity-70 hover:opacity-100 transition-opacity duration-300 items-start"
            />
            {/* Logo 2 */}
            <img
              src={logo2}
              alt="QUO Legal Firm"
              className="h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Logo 3 */}
            <img
              src={logo3}
              alt="Agrimax"
              className="h-10 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Logo 4 */}
            <img
              src={logo4}
              alt="VS Studio"
              className="h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
