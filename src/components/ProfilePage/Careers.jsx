import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import CareersModal from "./CareersModal";

function Careers() {
  let [isCareersOpen, setIsCareersOpen] = useState(false);
  let [careers, setCareers] = useState({
    currentIndustry: "IT Services & Consulting",
    department: "Engineering - Software & QA",
    roleCategory: "Software Development",
    jobRole: "Software Engineer",
    desiredJobTypes: ["permanent", "contractual"],
    employeeType: ["full-time", "part-time"],
    shift: "flexible",
    location: ["Mumbai", "Thane", "Navi Mumbai"],
    salary: 2500000,
  });

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg" id="careers">
            Careers
          </h2>
          <button onClick={() => setIsCareersOpen((prev) => !prev)}>
            <FiEdit2 className="text-sm text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Current Industry
              </h3>
              <p className="font-semibold text-sm">{careers.currentIndustry}</p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Department
              </h3>
              <p className="font-semibold text-sm">{careers.department}</p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Role category
              </h3>
              <p className="font-semibold text-sm">{careers.roleCategory}</p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">Job role</h3>
              <p className="font-semibold text-sm">{careers.jobRole}</p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Desired job type
              </h3>
              <p className="font-semibold text-sm">
                {careers.desiredJobTypes.join(", ")}
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Desired employee type
              </h3>
              <p className="font-semibold text-sm">
                {careers.employeeType.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Preferred shifts
              </h3>
              <p className="font-semibold text-sm">{careers.shift}</p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Preferred work locations
              </h3>
              <p className="font-semibold text-sm">
                {careers.location.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Expected Salary
              </h3>
              <p className="font-semibold text-sm">{careers.salary}</p>
            </div>
          </div>
        </div>
      </div>

      <CareersModal
        isOpen={isCareersOpen}
        setIsOpen={setIsCareersOpen}
        careers={careers}
        setCareers={setCareers}
      />
    </>
  );
}

export default Careers;
