import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import EducationModal from "./Modals/EducationModal";
import EducationUtlity from "../../../utility/EducationUtlity";

function Education() {
  
const utility = EducationUtlity();
  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4 ">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="font-semibold text-md" id="Education">
            Education
          </h2>
          <button className="text-blue-700 text-base font-semibold" onClick={utility.toggleEducation}>Add</button>
        </div>

        <div className="flex flex-col gap-8">
          {utility.education.map((edu) => (
            <div key={edu.id} className="flex flex-col gap">
              <div className="flex flex-1 gap-3 text-base font-semibold text-black">
                <h3>
                  {edu.degree} from {edu.institution}
                </h3>
                <button onClick={utility.toggleEducation}>
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
        isOpen={utility.isEducationOpen}
        toggleEducation={utility.toggleEducation}
      />
    </>
  );
}

export default Education;
