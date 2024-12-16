import React from 'react';
import KnowledgePartnerItem from './KnowldgePartnerItem'; 
import OfferContentSection from '../Common/OfferContentSection';

// Import local images
import Image1 from '../../img/Google.png';
import Image2 from '../../img/IIT BOMABAY.png';
import Image3 from '../../img/IITIndore.png';
import TwoFactors from "../../img/2 factors.png";
import NBHA from "../../img/Nbha150x150.png";
import Gold from "../../img/gold-150x150.png";
import Bharat from "../../img/BHart150x150.png";

const KnowledgePartnerCardSection = () => {
  const cards = [
    { title: 'GOOGLE', image: Image1 },
    { title: 'IIT BOMBAY', image: Image2 },
    { title: 'IIT INDORE', image: Image3 },
  ];

  return (
    <div className="container mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left section for AI Smart Clinics */}
        <div className="w-full lg:w-1/2 space-y-16">
          <div className="text-center lg:text-left text-[#2E4168]">
            <OfferContentSection
              titleDesktop="AI Smart Clinics For Doctors"
              titleMobile="AI Smart Clinics For Doctors"
            />
          </div>
          <div className="flex justify-center ml-0">
            <img
              src={TwoFactors}
              alt="Two Factors"
              className="w-full max-w-2xl object-contain transition-all duration-300 transform  "
            />
          </div>

          {/* Image Section with improved layout */}
          <div className="grid grid-cols-3 gap-8 justify-center lg:justify-start ml-4">
            <img
              src={NBHA}
              alt="NBHA"
              className="w-40 h-40 object-contain transition-transform duration-300 transform rounded-lg hover:scale-110"
            />
            <img
              src={Gold}
              alt="Gold"
              className="w-40 h-40 object-contain transition-transform duration-300 transform  rounded-lg hover:scale-110"
            />
            <img
              src={Bharat}
              alt="Bharat"
              className="w-40 h-40 object-contain transition-transform duration-300 transform  rounded-lg hover:scale-110"
            />
          </div>
        </div>

        {/* Right section for Knowledge Partners */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="text-center lg:text-left text-[#2E4168]">
            <OfferContentSection
              titleDesktop="Our Knowledge Partners"
              titleMobile="Our Knowledge Partners"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <KnowledgePartnerItem
                key={index}
                title={card.title}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgePartnerCardSection;
