import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider';
import HeroSection from '../components/HeroSection';
import AnimatedText from '../components/AnimatedText';
import About from '../components/About/About';
import FeaturesSection from '../components/Feature/FeaturesSection';
import PricingSection from '../components/Pricing/PricingSection';
import TestimonialSection from '../components/TestimonialSection';
import Faq from '../components/Faq';
import Blog from '../components/Blog/Blog';

import Footer from '../components/Footer';
import ImageComparison from '../components/ImageCompare';
import OurClient from '../components/OurClient';
import KnowledgePartnerCardSection from '../components/KnowledgePartner/KnowldgePartnerCardSection';
import DoctorsCarousel from '../components/CaroselSmall';




const Home = () => {
  return (
    <div className="flex flex-col space-y-0 overflow-hidden"> {/* This removes any vertical gap between the components */}
     
      <Slider />
      <HeroSection></HeroSection>
      <AnimatedText></AnimatedText>
      <ImageComparison></ImageComparison>
      <About></About>
      <FeaturesSection></FeaturesSection>
      {/* <PricingSection></PricingSection> */}
     <KnowledgePartnerCardSection></KnowledgePartnerCardSection>
      

      <TestimonialSection></TestimonialSection>
      <DoctorsCarousel></DoctorsCarousel>
      <Faq></Faq>

      <Blog></Blog>
      <OurClient></OurClient>


     
    </div>
  );
};

export default Home;
