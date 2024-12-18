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
import DoctorsCarousel from '../components/Team/CaroselSmall';
import ComparisonSection from '../components/ComparisonSection';
import WhyGudmedUnique from '../components/WhyGudmedUnique';
import TechnologyPage from '../components/TechnologyPage';
import CounterSection from '../components/CounterSection';




const Home = () => {
  return (
    <div className="flex flex-col space-y-0 overflow-hidden"> {/* This removes any vertical gap between the components */}
    
      <Slider />
      <OurClient></OurClient>

      <HeroSection></HeroSection>
      <AnimatedText></AnimatedText>
      <ImageComparison></ImageComparison>
      {/* <About></About> */}
      <CounterSection></CounterSection>
      <TechnologyPage></TechnologyPage>
      <FeaturesSection></FeaturesSection>
      {/* <PricingSection></PricingSection> */}
      <ComparisonSection></ComparisonSection>
      <WhyGudmedUnique></WhyGudmedUnique>
     <KnowledgePartnerCardSection></KnowledgePartnerCardSection>
      

      {/* <TestimonialSection></TestimonialSection> */}
      {/* <DoctorsCarousel></DoctorsCarousel> */}
      {/* <Faq></Faq> */}

      {/* <Blog></Blog> */}
      <OurClient></OurClient>


     
    </div>
  );
};

export default Home;
