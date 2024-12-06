import React from "react";
import FeatureCard from "./FeatureCard";
import doctorImage from "../img/DoctorImage.png"; // Ensure to replace with correct image path

const DoctorHome = () => {
    return (
        <div className="relative bg-gray-50 py-12 px-6 md:px-12 lg:px-20 xl:px-40">
            {/* Intro Section */}
            <div className="text-center mb-12">
               
                <p className="text-lg text-gray-700 mb-6">
                   
                </p>
               
                <ul className="list-disc list-inside text-lg text-gray-700 mb-12">
                   
                </ul>
            </div>

            {/* Image and Content Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
                {/* Left: Doctor Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={doctorImage}
                        alt="Doctor"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-6">
                    For Doctors
                </h1>
                    <p className="text-lg text-gray-700 mb-4">
                    At GudMed, we empower doctors by streamlining patient management through cutting-edge technology. Our platform allows you to focus more on patient care and less on administrative tasks. With real-time prescription digitization, patient engagement tools, and AI-powered operational support, GudMed helps you improve efficiency, reduce errors, and offer a more personalized healthcare experience. Join us in revolutionizing healthcare with smarter solutions that make your practice run smoother and deliver better patient outcomes.
                    </p>
                    <h2 className="text-2xl font-semibold text-blue-800 mb-4">Key Features for Doctors:</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                    <li>Quick and accurate discharge summaries</li>
                    <li>Seamless patient communication</li>
                    <li>Automated post-care follow-ups and reminders</li>
                    <li>Real-time access to patient history and reports</li>
                    </ul>
                </div>
            </div>

            {/* Cards Section */}
            {/* <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                <FeatureCard
                    title="Gudmed Smart Camera"
                    description="The GudMed Smart Camera simplifies the digitization of handwritten prescriptions in outpatient departments, providing instant, high-accuracy results."
                    features={[
                        "High-Quality Image Capture",
                        "Real-Time AI Processing",
                        "Instant Integration with Hospital Systems",
                        "Automatic Validation and Error Detection",
                        "Fast and Secure Data Transfer",
                        "User-Friendly for Healthcare Staff",
                    ]}
                    icon="camera"
                />
                <FeatureCard
                    title="AI-Driven Technology for Real-Time Remote Monitoring"
                    description="GudMed's AI technology enables real-time remote monitoring in ICUs, ensuring immediate responses to changes in patient conditions."
                    features={[
                        "AI-powered remote monitoring for ICU",
                        "Real-time data capture from patient monitors",
                        "Predictive analytics for proactive care",
                        "Automated alerts for critical events",
                        "Seamless integration with hospital EMR systems",
                        "Improved patient safety and outcomes",
                    ]}
                    icon="ai"
                />
                <FeatureCard
                    title="Data Capture from Existing Patient Monitors"
                    description="GudMed integrates with existing patient monitors for real-time data analysis and informed decision-making."
                    features={[
                        "Integrates with existing patient monitors",
                        "Supports various types of vital sign monitors",
                        "Real-time data synchronization",
                        "Data visualization for quick insights",
                        "Enhances clinical decision-making",
                        "Reduces manual data entry",
                    ]}
                    icon="data"
                />
                <FeatureCard
                    title="Real-Time Patient Monitoring System"
                    description="Provides continuous updates on patient status and health metrics to enhance ICU efficiency and patient care."
                    features={[
                        "Continuous monitoring of patient vitals",
                        "Accessible data on mobile devices for doctors",
                        "Automated record-keeping in EMRs",
                        "Customizable alerts for critical values",
                        "Data-driven insights for treatment planning",
                        "Improved workflow efficiency",
                    ]}
                    icon="monitoring"
                />
                <FeatureCard
                    title="GudMed Real-Time ICU Monitoring Platform"
                    description="Centralized ICU data and AI-driven analysis improve patient outcomes and ICU workflows."
                    features={[
                        "Centralized data from multiple monitors",
                        "AI-driven analysis for early intervention",
                        "Secure and compliant data storage",
                        "User-friendly dashboard for ICU staff",
                        "Interoperable with other hospital systems",
                        "Helps improve response times in critical situations",
                    ]}
                    icon="platform"
                />
            </div> */}
        </div>
    );
};

export default DoctorHome;
