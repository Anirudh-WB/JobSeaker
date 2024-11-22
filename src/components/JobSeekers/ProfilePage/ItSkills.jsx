import React from "react";
import { FiEdit2 } from "react-icons/fi";
import ItSkillsModal from "./Modals/ItSkillsModal";
import ItSkillUtility from "../../../utility/ItSkillsUtility";

function ItSkills() {
  const utility = ItSkillUtility();

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg" id="IT-skills">
            IT skills
          </h2>

          <button
            className="font-semibold text-blue-700"
            onClick={() => {
              utility.setSkillToEdit({
                name: "",
                version: NaN,
                lastUsed: NaN,
                experience: {
                  year: 0,
                  month: 0,
                },
              });
              utility.toggleModal();
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
              {utility.itSkills?.map((skill, index) => (
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
                        utility.setSkillToEdit(skill);
                        utility.toggleModal();
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
        isOpen={utility.isItSkillsOpen}
        toggleModal={utility.toggleModal}
        skills={utility.itSkills}
        setSkills={utility.setItSkills}
        skillToEdit={utility.skillToEdit}
      />
    </>
  );
}

export default ItSkills;
