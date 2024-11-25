import { useState } from "react";

export default function ProjectUtility() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [projectHeadline, setProjectHeadline] = useState([
    {
      id: 0,
      title: "Attendance Tracking System (Face Recognition)",
      client: "W.B (Offsite)",
      month: "Feb",
      year: "2024",
      radio: "Completed",
      description:
        "Attendance Tracking System (Face Recognition) for the first time in the future and will be updated in the future when the system is fully implemented. This project aims to improve efficiency and accuracy in attendance recording, using advanced face recognition technology.",
    },
  ]);

  const [projectTemp, setprojectTemp] = useState([
    {
      id: 0,
      title: "",
      client: "",
      month: "",
      year: "",
      radio: "",
      description: "",
    },
  ]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return {
    projectHeadline,
    setProjectHeadline,
    isExpanded,
    setIsExpanded,
    toggleReadMore,
    projectTemp,
    setprojectTemp,
  };
}
