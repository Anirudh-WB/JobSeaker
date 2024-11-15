import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import KeySkillsModal from "./Modals/KeySkillsModal";
import KeySkillsUtility from "../../../utility/KeySkillsUtility";

function KeySkills() {
  const utility = KeySkillsUtility();

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg" id="Key-skills">
            Key skills
          </h2>
          <button onClick={utility.toggleModal}>
            <FiEdit2 className="text-sm text-gray-700" />
          </button>
        </div>
        <div className="flex items-center gap-1 flex-wrap text-sm text-gray-700">
          {utility.skills.map((skill, index) => (
            <span className="border rounded-full px-3 py-1" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <KeySkillsModal
        isOpen={utility.isKeySkillsOpen}
        toggleModal={utility.toggleModal}
        setSkills={utility.setSkills}
      />
    </>
  );
}

export default KeySkills;
