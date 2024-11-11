import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import ItSkillsModal from "./ItSkillsModal";

function ItSkills() {
  let [isItSkillsOpen, setIsItSkillsOpen] = useState(false);

  const [skillToEdit, setSkillToEdit] = useState({
    id: 0,
    name: "",
    version: NaN,
    lastUsed: NaN,
    experience: {
      year: 0,
      month:  0 ,
    },
  });

  let [itSkills, setItSkills] = useState([
    {
      id: 1,
      name: "Docker",
      version: NaN,
      lastUsed: 2024,
      experience: {
        year: 0,
        month: 0,
      },
    },
    {
      id: 2,
      name: "MySQL",
      version: NaN,
      lastUsed: 2024,
      experience: {
        year: 0,
        month: 0,
      },
    },
    {
      id: 3,
      name: "SQL Server",
      version: NaN,
      lastUsed: 2024,
      experience: {
        year: 0,
        month: 0,
      },
    },
    {
      id: 4,
      name: "C#",
      version: 12,
      lastUsed: 2024,
      experience: {
        year: 12,
        month: 0,
      },
    },
    {
      id: 5,
      name: "React.js",
      version: 18,
      lastUsed: 2024,
      experience: {
        year: 2,
        month: 0,
      },
    },
    {
      id: 6,
      name: ".Net Core",
      version: 8,
      lastUsed: 2024,
      experience: {
        year: 4,
        month: 0,
      },
    },
  ]);

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold" id="IT-skills">
            IT skills
          </h2>

          <button
            className="font-semibold text-blue-700"
            onClick={() => {
              setSkillToEdit({
                name: "",
                version: NaN,
                lastUsed: NaN,
                experience: {
                  year: 0,
                  month: 0,
                },
              });
              setIsItSkillsOpen((prev) => !prev);
            }}
          >
            Add details
          </button>
        </div>
        <div className="flex items-center gap-1 flex-wrap text-sm text-gray-700">
          <div className="w-full">
            <div className="border-b w-full flex py-1 text-gray-700">
              <h4 className="w-1/5">Skills</h4>
              <h4 className="w-1/5">Version</h4>
              <h4 className="w-1/5">Last used</h4>
              <h4 className="w-1/5">Experience</h4>
              <h4 className="w-1/5"> </h4>
            </div>

            <div className="w-full flex flex-col gap-5 font-medium mt-4">
              {itSkills?.map((skill, index) => (
                <div className="w-full flex" key={index}>
                  <p className="w-1/5">{skill.name}</p>
                  <p className="w-1/5">
                    {skill.version > 0 && !isNaN(skill.version)
                      ? skill.version
                      : "-"}
                  </p>
                  <p className="w-1/5">
                    {skill.lastUsed > 0 && !isNaN(skill.lastUsed)
                      ? skill.lastUsed
                      : "-"}
                  </p>
                  <p className="w-1/5">{`${skill.experience?.year} Year${
                    skill.experience?.year > 1 ? "s" : ""
                  } ${skill.experience?.month} Month${
                    skill.experience?.month > 1 ? "s" : ""
                  }`}</p>
                  <p className="w-1/5 text-center">
                    <button
                      onClick={() => {
                        setSkillToEdit(skill);
                        setIsItSkillsOpen((prev) => !prev);
                      }}
                    >
                      <FiEdit2 className="text-sm text-gray-700" />
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ItSkillsModal
        isOpen={isItSkillsOpen}
        setIsOpen={setIsItSkillsOpen}
        skills={itSkills}
        setSkills={setItSkills}
        skillToEdit={skillToEdit}
      />
    </>
  );
}

export default ItSkills;
