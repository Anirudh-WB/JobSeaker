import React, { useState } from "react";
import EmploymentModal from "./Modals/EmploymentModal";
import { FiEdit2 } from "react-icons/fi";

function Employment() {
  let [isEmploymentOpen, setIsEmploymentOpen] = useState(false);

  const [isExpanded, setIsExpanded] = useState([]);

  const [employments, setEmployment] = useState([
    {
      id: 1,
      isCurrentEmployment: false,
      jobTitle: "Full Stack Developer",
      companyName: "Oasis Infotech",
      employmentType: "Internship",
      joiningDate: "Mar 2024",
      endDate: "May 2024",
      salary: 0,
      jobProfile:
        "Attendance Tracking System (Face Recognition) for the first time in the future and will be updated in the future when the system is fully implemented. This employment aims to improve efficiency and accuracy in attendance recording, using advanced face recognition technology.",
      noticePeriod: 2,
    },
    {
      id: 2,
      isCurrentEmployment: true,
      jobTitle: "Software Developer",
      companyName: "WonderBiz Technologies",
      employmentType: "Full-time",
      joiningDate: "Mar 2024",
      endDate: "",
      salary: 2100000,
      jobProfile:
        "Attendance Tracking System (Face Recognition) for the first time in the future and will be updated in the future when the system is fully implemented. This employment aims to improve efficiency and accuracy in attendance recording, using advanced face recognition technology.",
      noticePeriod: 0,
    },
  ]);

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg" id="IT-skills">
            Employment
          </h2>

          <button
            className="font-semibold text-blue-700"
            onClick={() => {
              setIsEmploymentOpen((prev) => !prev);
            }}
          >
            Add details
          </button>
        </div>

        {employments?.map((employment, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold">{employment.jobTitle}</h3>
              <button onClick={() => setIsEmploymentOpen((prev) => !prev)}>
                <FiEdit2 className="text-sm text-gray-700" />
              </button>
            </div>
            <h4>{employment.companyName}</h4>
            {employment.employmentType !== "" ||
            employment.joiningDate !== "" ? (
              <p className="text-gray-500 text-sm">
                <span>{employment.employmentType}</span>
                {employment.employmentType !== "" &&
                employment.joiningDate !== ""
                  ? " | "
                  : ""}
                <span>
                  {employment.joiningDate} to{" "}
                  {employment.isCurrentEmployment
                    ? "Present"
                    : employment.endDate}
                </span>
              </p>
            ) : (
              <></>
            )}
            {employment.noticePeriod > 0 ? (
              <p className="text-gray-700 text-sm">
                {employment.noticePeriod} Month
                {employment.noticePeriod > 1 ? "s" : ""} Notice Period
              </p>
            ) : (
              <></>
            )}
            <p className="text-gray-900 text-sm">
              {isExpanded.includes(employment.id)
                ? employment.jobProfile
                : `${employment.jobProfile.slice(0, 200)}... `}
              <button
                onClick={() =>
                  setIsExpanded((prev) =>
                    !prev.includes(employment.id)
                      ? [employment.id, ...prev]
                      : prev.filter((item) => item !== employment.id)
                  )
                }
                className="text-blue-700 text-xs font-semibold"
              >
                {isExpanded.includes(employment.id) ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        ))}
      </div>

      <EmploymentModal
        isOpen={isEmploymentOpen}
        setIsOpen={setIsEmploymentOpen}
        employments={employments}
        setEmployment={setEmployment}
      />
    </>
  );
}

export default Employment;
