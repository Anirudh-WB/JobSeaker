import { useState } from "react";

function ItSkillsUtility() {
  const [skillToEdit, setSkillToEdit] = useState({
    id: 0,
    name: "",
    version: NaN,
    lastUsed: NaN,
    experience: {
      year: 0,
      month: 0,
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
  const [skillsTemp, setSkillsTemp] = useState(
    skillToEdit || {
      name: "",
      version: NaN,
      lastUsed: NaN,
      experience: {
        year: 0,
        month: 0,
      },
    }
  );

  return {
    skillToEdit,
    setSkillToEdit,
    itSkills,
    setItSkills,
    skillsTemp,
    setSkillsTemp,
  };
}

export default ItSkillsUtility;
