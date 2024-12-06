import React from 'react';
import FeatureItem from './FeatureItem';

import features from './FeatureData';

const FeaturesSection = () => {
  
  return (
    <section className="py-16 bg-white over">
      <div className="container mx-auto  ">
        <h2 className="text-3xl font-bold text-center mb-8">
        How we are making Patient Smarter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full max-w-none">


          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
