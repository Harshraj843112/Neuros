import React from 'react';
import { FaStethoscope, FaClipboardCheck, FaChartLine, FaPrescriptionBottle, FaHandHoldingHeart } from 'react-icons/fa';

const features = [
    {
        title: "Real-Time Prescription and Discharge Summary Digitization",
        description: "Digitize prescriptions and discharge summaries in real-time, ensuring instant record availability and automated workflows.",
        icon: <FaClipboardCheck className="text-blue-600" size={40} />,
    },
    {
        title: "Digital Patient Records and Document Management",
        description: "Securely store and access patient records digitally, eliminating the need for physical files and improving care efficiency.",
        icon: <FaStethoscope className="text-blue-600" size={40} />,
    },
    {
        title: "AI-Powered Analytics and Operational Efficiency",
        description: "Leverage AI-driven tools to optimize resource allocation, predict patient needs, and enhance decision-making.",
        icon: <FaChartLine className="text-blue-600" size={40} />,
    },
    {
        title: "Seamless Integration with Labs and Pharmacies",
        description: "Enable real-time updates between hospital, lab, and pharmacy for faster patient care and improved inventory management.",
        icon: <FaPrescriptionBottle className="text-blue-600" size={40} />,
    },
    {
        title: "Post-Care Engagement and Automated Follow-Ups",
        description: "Automate follow-ups and reminders to keep patients engaged and reduce readmission rates.",
        icon: <FaHandHoldingHeart className="text-blue-600" size={40} />,
    },
];

const GudMedFeatures = () => {
    return (
        <section className="py-10 px-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-8">
                Why GudMed Is the Perfect Partner for Your Smart Hospital Transition
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    >
                        {feature.icon}
                        <h4 className="mt-4 text-lg sm:text-xl font-semibold text-blue-800">
                            {feature.title}
                        </h4>
                        <p className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GudMedFeatures;
