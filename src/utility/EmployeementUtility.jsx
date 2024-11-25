import { useState } from "react";

function EmployeementUtility() {
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

  return {
    isExpanded,
    setIsExpanded,
    employments,
    setEmployment,
  };
}

export default EmployeementUtility;
