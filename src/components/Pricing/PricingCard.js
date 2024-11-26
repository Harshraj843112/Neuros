import React from "react";

const PricingCard = ({
  title,
  subtitle,
  features,
  price,
  buttonText,
  highlight,
}) => {
  return (
    <div
      className={`p-8 border rounded-lg shadow-md relative ${
        highlight ? "bg-gray-50" : "bg-white"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-6 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
          Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{subtitle}</p>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700 mb-2">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <button
        className={`w-full py-2 px-4 text-sm font-semibold rounded-lg border ${
          highlight
            ? "bg-black text-white border-black hover:bg-gray-800"
            : "text-red-600 border-red-600 hover:bg-red-50"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
