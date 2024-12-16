import React from "react";
import { 
  FaCamera, 
  FaCog, 
  FaServer, 
  FaShieldAlt, 
  FaUserFriends, 
  FaBolt, 
  FaCheckCircle, 
  FaPrescriptionBottle, 
  FaLock, 
  FaHospital 
} from "react-icons/fa";
import SmartCameraImage from "../../img/Camera.jpg";

const GudMedSmartCamera = () => {
  const features = [
    { 
      icon: <FaCamera className="text-blue-600 text-4xl" />, 
      title: "High-Quality Image Capture", 
      description: "The GudMed Smart Camera is designed to capture clear, high-resolution images of handwritten prescriptions. Its smart focus and lighting adjustment features ensure that even prescriptions with poor handwriting or complex notations are captured with precision, regardless of the environment or paper quality." 
    },
    { 
      icon: <FaCog className="text-blue-600 text-4xl" />, 
      title: "Real-Time AI Processing", 
      description: "Once the prescription is captured, the built-in AI software immediately processes the image. Using advanced Optical Character Recognition (OCR) technology, the smart camera accurately reads and digitizes the handwritten content. It identifies medical terms, drug names, and dosage instructions with a high level of accuracy, minimizing errors in the digitization process." 
    },
    { 
      icon: <FaServer className="text-blue-600 text-4xl" />, 
      title: "Instant Integration with Hospital Systems", 
      description: "The digitized prescription is instantly sent to the hospital’s Electronic Medical Record (EMR) system. This real-time integration allows the prescription to be accessed by the hospital's pharmacy, lab services, or any other relevant department without delay, ensuring smooth processing for the patient." 
    },
    { 
      icon: <FaBolt className="text-blue-600 text-4xl" />, 
      title: "Automatic Validation and Error Detection", 
      description: "GudMed’s AI not only digitizes the prescription but also performs real-time validation. The system checks for inconsistencies or potential errors, such as illegible handwriting or incomplete information, and flags them for review. This ensures that prescriptions are accurate and actionable." 
    },
    { 
      icon: <FaShieldAlt className="text-blue-600 text-4xl" />, 
      title: "Fast and Secure Data Transfer", 
      description: "All digitized data captured by the GudMed Smart Camera is securely transferred to the hospital’s system using encrypted channels, ensuring patient privacy and data security. This feature guarantees that sensitive health information is protected at all times during the digitization process." 
    },
    { 
      icon: <FaUserFriends className="text-blue-600 text-4xl" />, 
      title: "User-Friendly for Healthcare Staff", 
      description: "The GudMed Smart Camera is designed with ease of use in mind. Healthcare staff can operate the camera without extensive training, and the process is fast enough to keep up with busy OPD workflows. Its intuitive design allows for rapid scanning of multiple prescriptions in a short amount of time." 
    },
  ];

  const benefits = [
    { icon: <FaPrescriptionBottle className="text-green-600 text-3xl" />, text: "Speed and Efficiency: Instantly digitizes prescriptions, reducing time spent on manual data entry." },
    { icon: <FaCheckCircle className="text-green-600 text-3xl" />, text: "High Accuracy: Uses advanced AI and OCR to minimize errors in reading and digitizing handwritten text." },
    { icon: <FaHospital className="text-green-600 text-3xl" />, text: "Seamless Integration: Connects directly to hospital systems, ensuring prescriptions are accessible to relevant departments in real-time." },
    { icon: <FaBolt className="text-green-600 text-3xl" />, text: "Improved Patient Experience: Speeds up workflows, reducing patient waiting time." },
    { icon: <FaLock className="text-green-600 text-3xl" />, text: "Enhanced Security: Ensures all patient data is securely stored and transferred, safeguarding sensitive medical information." },
    { icon: <FaUserFriends className="text-green-600 text-3xl" />, text: "Minimal Training Required: Easy to use, allowing healthcare staff to adopt the technology quickly without disruption to their routine." },
  ];

  return (
    <div className="px-4 py-12 bg-gradient-to-r from-gray-100 to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#2E4168] mb-8">
          GudMed Smart Camera: Revolutionizing Prescription Digitization
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          The GudMed Smart Camera simplifies and accelerates the digitization of handwritten prescriptions in outpatient departments (OPD). With advanced imaging technology and AI-driven recognition software, this cutting-edge tool ensures accurate and efficient prescription digitization.
        </p>

        <div className="flex flex-wrap lg:flex-nowrap items-center lg:space-x-8">
          <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
            <img src={SmartCameraImage} alt="GudMed Smart Camera" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center bg-white p-4 shadow-lg rounded-lg hover:shadow-xl transition duration-300">
                  {feature.icon}
                  <h3 className="text-lg font-semibold text-[#2E4168] mt-4">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#2E4168] text-center mb-6">
            Key Benefits of GudMed Smart Camera
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition duration-300 shadow-md">
                {benefit.icon}
                <span className="text-gray-800 font-medium ml-4">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GudMedSmartCamera;
