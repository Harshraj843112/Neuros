import React from "react";
import { FaHospital, FaRobot, FaChartBar, FaClipboardCheck } from "react-icons/fa";
import { FiSettings, FiActivity } from "react-icons/fi";

const HighlightCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out p-6 rounded-xl flex flex-col items-center border border-gray-200 hover:border-blue-300">
    <Icon className="text-blue-500 text-5xl mb-4" />
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const TechnologyPage = () => (
  <div className="bg-white min-h-screen py-12 px-6">
    {/* Header */}
    <div className="text-center mb-16">
    <h1 className="text-4xl font-extrabold font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mb-8 p-10">
  GudMed’s Technology
</h1>

      <p className="text-gray-700 max-w-3xl mx-auto text-lg">
        GudMed’s technology is designed to optimize healthcare operations through automation and intelligent tools. Our platform integrates seamlessly with hospital systems, enabling real-time access to patient data, reports, and medication history. The use of AI helps hospitals reduce workload, minimize errors, and deliver faster, more
        accurate care. With our advanced digitization and data integration capabilities, you can elevate your healthcare services to the next level.
      </p>
    </div>

    {/* Technology Section */}
    <section className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#2E4168] relative inline-block">
          Technology
          <div className="h-1 w-16 bg-[#2E4168] absolute left-1/2 -translate-x-1/2 mt-2"></div>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <HighlightCard
          icon={FaHospital}
          title="EMR Integration"
          description="Seamless EMR and hospital system integration."
        />
        <HighlightCard
          icon={FaChartBar}
          title="AI Analytics"
          description="AI-powered data analytics for actionable insights"
        />
        <HighlightCard
          icon={FiSettings}
          title="Document Digitization"
          description="Real-time document digitization and processing"
        />
        <HighlightCard
          icon={FiActivity}
          title="Automated Workflows"
          description="Automated workflows for improved efficiency"
        />
      </div>
    </section>

    {/* Artificial Intelligence Section */}
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#2E4168] relative inline-block">
          Artificial Intelligence
          <div className="h-1 hover:block w-16 bg-[#2E4168] absolute left-1/2 -translate-x-1/2 mt-2"></div>
        </h2>
      </div>
      <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-10">
        Artificial intelligence is transforming healthcare, and GudMed is at the forefront of this revolution. Our AI-driven platform helps hospitals and doctors make data-backed decisions faster. From predicting patient outcomes to optimizing workflows, our AI tools improve efficiency, reduce errors, and offer a personalized healthcare experience for every patient.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <HighlightCard
          icon={FaRobot}
          title="Predictive Analytics"
          description="Predictive analytics for better patient care."
        />
        <HighlightCard
          icon={FaClipboardCheck}
          title="Automated Reports"
          description="Automating administrative tasks like report generation."
        />
        <HighlightCard
          icon={FiActivity}
          title="Operational Insights"
          description="AI-driven insights for operational improvements."
        />
        <HighlightCard
          icon={FaChartBar}
          title="Personalized Treatment"
          description="Personalizing patient treatment plans"
        />
      </div>
    </section>
  </div>
);

export default TechnologyPage;
