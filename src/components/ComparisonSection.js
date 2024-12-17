import React from "react";
import {
  DocumentDuplicateIcon,
  DocumentTextIcon,
  MagnifyingGlassCircleIcon,
  ChartBarIcon,
  LinkIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const ComparisonSection = () => {
  const comparisonData = [
    {
      aspect: "Prescription Handling",
      other: {
        text: "Stores xerox/digital copies of handwritten prescriptions without full digitization",
        icon: <DocumentDuplicateIcon className="h-6 w-6 text-red-500 inline-block mr-2" />,
      },
      gudmed: {
        text: "Fully digitizes handwritten prescriptions and converts data into a digital format",
        icon: <DocumentTextIcon className="h-6 w-6 text-green-500 inline-block mr-2" />,
      },
    },
    // ... Other rows here (unchanged) ...
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-16">
      <div className="overflow-hidden shadow-xl rounded-lg">
        <div className="overflow-x-auto w-full">
          <table className="table-auto min-w-full bg-white rounded-lg">
            <thead className="bg-blue-400 text-white text-sm uppercase">
              <tr>
                <th className="border border-blue-300 px-4 sm:px-6 py-3 text-left font-bold">
                  Aspect
                </th>
                <th className="border border-blue-300 px-4 sm:px-6 py-3 text-left font-bold">
                  Other Technology
                </th>
                <th className="border border-blue-300 px-4 sm:px-6 py-3 text-left font-bold text-[#2E4168]">
                  GudMed Technology
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-100 transition-transform duration-300`}
                >
                  <td className="border border-gray-300 px-4 sm:px-6 py-4 text-blue-900 font-semibold">
                    {item.aspect}
                  </td>
                  <td className="border border-gray-300 px-4 sm:px-6 py-4 text-gray-600">
                    {item.other.icon}
                    {item.other.text}
                  </td>
                  <td className="border border-gray-300 px-4 sm:px-6 py-4 text-green-700 font-medium">
                    {item.gudmed.icon}
                    {item.gudmed.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
