import React from "react";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      subtitle: "Great for private individuals",
      features: [
        "1 User",
        "Unlimited Projects",
        "Download prototypes",
        "1 Gb workspace",
      ],
      price: "Free",
      buttonText: "Get started",
      highlight: false,
    },
    {
      title: "Premium",
      subtitle: "14 days free period",
      features: [
        "3 Users",
        "Unlimited Projects",
        "Download prototypes",
        "100 Gb workspace",
      ],
      price: "$99",
      buttonText: "Get started",
      highlight: true,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          Simple and flexible. <br />
          Only pay for what you use.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
