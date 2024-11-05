import React from "react";

function KeySkills() {
  const skills = [
    "C #",
    "Asp.Net Core",
    ".Net Core",
    "Ms Sql Server",
    "Entity Framework",
    "Asp.Net",
    "Asp.Net Mvc5",
    "Web Api",
    "Ado.net",
    "React Js",
    "Jquery",
  ];

  return (
    <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
      <h2 className="font-semibold text-md" id="Key-skills">
        Key skills
      </h2>
      <div className="flex items-center gap-1 flex-wrap text-sm text-gray-700">
        {skills.map((skill, index) => (
          <span className="border rounded-full px-3 py-1" key={index}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default KeySkills;
