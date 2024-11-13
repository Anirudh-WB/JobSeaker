import { useState } from "react";

function KeySkillsUtility() {
  let [isKeySkillsOpen, setIsKeySkillsOpen] = useState(false);

  let [skills, setSkills] = useState([
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
  ]);

  const [suggestedSkills, setSuggestedSkills] = useState([
    "Procedure Development",
    "Problem Resolution",
    "Problem Solving",
    "Problem Solving Skills",
    "Problem Solving Tools",
    "PROC SQL",
    "Procedural Programming",
    "Procedure",
    " Process",
    "Process Adherence",
  ]);

  const toggleModal = () => {
    setIsKeySkillsOpen((prev) => !prev);
  };

  const [skillsTemp, setSkillsTemp] = useState(skills);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuggestions = suggestedSkills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    isKeySkillsOpen,
    toggleModal,
    skills,
    setSkills,
    skillsTemp,
    setSkillsTemp,
    searchTerm,
    setSearchTerm,
    filteredSuggestions,
    suggestedSkills,
    setSuggestedSkills,
  };
}

export default KeySkillsUtility;
