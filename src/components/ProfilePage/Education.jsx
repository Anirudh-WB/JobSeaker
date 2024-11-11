import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import EducationModal from "./EducationModal";

function Education() {
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

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4 ">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="font-semibold text-md" id="Education">
            Education
          </h2>
          <button className="text-blue-700 text-base font-semibold">Add</button>
        </div>

        <div className="flex flex-col gap-8">
          {education.map((edu) => (
            <div key={edu.id} className="flex flex-col gap">
              <div className="flex flex-1 gap-3 text-base font-semibold text-black">
                <h3>
                  {edu.degree} from {edu.institution}
                </h3>
                <button onClick={() => setIsEducationOpen((prev) => !prev)}>
                  <FiEdit2 className="text-sm text-gray-700" />
                </button>
              </div>
              <h3 className="text-gray-500">
                Graduated in {edu.endDate}, {edu.type}
              </h3>
              <h3 className="text-gray-500">Scored {edu.score}</h3>
            </div>
          ))}
        </div>
      </div>

      <EducationModal
        isOpen={isEducationOpen}
        setIsOpen={setIsEducationOpen}
        education={education}
        setEducation={setEducation}
      />
    </>
  );
}

export default Education;
