import React from "react";
import doctorImage from "../img/DoctorImage.png"; // Ensure to replace with correct image path

const DoctorHome = () => {
    return (
        <div className="relative bg-gray-50 py-12 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-40">
            {/* Intro Section */}
            <div className="text-center mb-12">
                <p className="text-lg text-gray-700 mb-6">
                    {/* Add any introductory text if needed */}
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-12">
                    {/* Add any list items if needed */}
                </ul>
            </div>

            {/* Image and Content Section */}
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-12 mb-16">
                {/* Left: Doctor Image */}
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    <img
                        src={doctorImage}
                        alt="Doctor"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Right: Content */}
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2E4168] mb-6">
                        For Doctors
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-4">
                        At GudMed, we empower doctors by streamlining patient management through cutting-edge technology. Our platform allows you to focus more on patient care and less on administrative tasks. With real-time prescription digitization, patient engagement tools, and AI-powered operational support, GudMed helps you improve efficiency, reduce errors, and offer a more personalized healthcare experience. Join us in revolutionizing healthcare with smarter solutions that make your practice run smoother and deliver better patient outcomes.
                    </p>
                    <h2 className="text-2xl font-semibold mb-4 text-[#2E4168]">
                        Key Features for Doctors:
                    </h2>
                    <ul className="list-disc list-inside text-lg sm:text-xl text-gray-700 space-y-3">
                        <li>Quick and accurate discharge summaries</li>
                        <li>Seamless patient communication</li>
                        <li>Automated post-care follow-ups and reminders</li>
                        <li>Real-time access to patient history and reports</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DoctorHome;
