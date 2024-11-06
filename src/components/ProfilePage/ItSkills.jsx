import React from "react";

function ItSkills() {
  let [isItSkillsOpen, setIsItSkillsOpen] = useState(false);
  let [itSkills, setItSkills] = useState([{ skill: "Docker", version: "" }]);

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-md" id="Key-skills">
            Key skills
          </h2>
          <button onClick={() => setIsKeySkillsOpen((prev) => !prev)}>
            <FiEdit2 className="text-sm text-gray-700" />
          </button>
        </div>
        <div className="flex items-center gap-1 flex-wrap text-sm text-gray-700">
          {skills.map((skill, index) => (
            <span className="border rounded-full px-3 py-1" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <KeySkillsModal
        isOpen={isKeySkillsOpen}
        setIsOpen={setIsKeySkillsOpen}
        skills={skills}
        setSkills={setSkills}
      />
    </>
  );
}

export default ItSkills;
