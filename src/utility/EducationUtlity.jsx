import { useState } from "react";

function EducationUtlity() {
  let [isEducationOpen, setIsEducationOpen] = useState(false);
  let [education, setEducation] = useState([
    {
      id: 1,
      institution: "K.J Somaiya College of Technology",
      degree: "B-tech/B.E",
      major: "Computer Science",
      startDate: "2010",
      endDate: "2014",
      type: "Full-time",
      score: "95%",
    },
    {
      id: 2,
      institution: "ABC College",
      degree: "Master's",
      major: "Computer Science",
      startDate: "2015",
      endDate: "2017",
      type: "Part-time",
      score: "3.7",
    },
    {
      id: 3,
      institution: "XYZ University",
      degree: "Bachelor of Arts",
      major: "History",
      startDate: "2014",
      endDate: "2016",
      type: "Part-time",
      score: "3.6",
    },
  ]);

  const toggleEducation = () => {
    setIsEducationOpen((prev) => !prev);
  };
  
  return {
    isEducationOpen,
    toggleEducation,
    education,
    setEducation,
  };
}

export default EducationUtlity;
