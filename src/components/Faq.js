import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "When will my order arrive?",
      answer:
        "Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.",
    },
    {
      question: "What’s your return policy?",
      answer:
        "We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.",
    },
    {
      question: "How do I make changes to an existing order?",
      answer:
        "Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require.",
    },
  ];

  return (
    <div className="p-5 bg-white ">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Everything you need to know about
        </h2>
        <ul>
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-white my-3 shadow-lg border-l-4 border-purple-500 rounded-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700 focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-purple-500 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-screen p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
