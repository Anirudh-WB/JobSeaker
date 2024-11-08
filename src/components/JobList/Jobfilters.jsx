import React, { useState } from "react";

function Jobfilters() {
  const skillsList = [
   ,
  ];
  const [openSections, setOpenSections] = useState({ skills: false, experience: true });
  const [experienceRange, setExperienceRange] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleAccordion = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleRangeChange = (event) => {
    setExperienceRange(event.target.value);
  };

  const handleSkillClick = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setSearchTerm(""); // Clear the search bar after selection
    }
  };

  const removeSkill = (skill) => {
    setSelectedSkills(
      selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
    );
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  const filteredSkills = skillsList.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-5 w-1/4">
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow p-2">
        <h3 className="p-2 text-black font-semibold">All filters</h3>

        <div className="p-2">
          <span className="sm:block border-t border-gray-300 w-full"></span>
        </div>

        {/* Experience Section */}
        <button
          type="button"
          className="flex items-center justify-between w-full p-2 font-medium rtl:text-right"
          onClick={() => toggleAccordion("experience")}
        >
          <span>Experience</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.experience ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        <div className={`${openSections.experience ? "" : "hidden"} p-2`}>
          <form>
            <label
              htmlFor="default-range"
              className="block text-sm font-medium text-gray-900 dark:text-white"
            >
              Experience (Years)
            </label>
            <div className="relative w-full">
              <input
                id="default-range"
                type="range"
                min="0"
                max="50"
                step="1"
                value={experienceRange}
                onChange={handleRangeChange}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm mt-2">
                <span className="font-semibold">0 yrs</span>
                <span className="font-semibold">{experienceRange} yrs</span>
              </div>
            </div>
          </form>
        </div>

        <div className="p-2">
          <span className="sm:block border-t border-gray-300 w-full"></span>
        </div>

        {/* Salary Section */}
        <button
          type="button"
          className="flex items-center justify-between w-full p-2 font-medium rtl:text-right"
          onClick={() => toggleAccordion("salary")}
        >
          <span>Salary</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.salary ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        <div className={`${openSections.salary ? "" : "hidden"}`}>
          <ul className="text-sm font-medium text-gray-900">
            {[0, 1, 2, 3].map((index) => (
              <li key={index}>
                <div className="flex items-center ps-3">
                  <input
                    id={`checkbox-${index}`}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600"
                  />
                  <label
                    htmlFor={`checkbox-${index}`}
                    className="py-3 ms-2 text-sm font-medium text-gray-900"
                  >
                    {index === 0
                      ? "0-3 Lakhs"
                      : index === 1
                      ? "3-6 Lakhs"
                      : index === 2
                      ? "6-9 Lakhs"
                      : "9+ Lakhs"}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-2">
          <span className="sm:block border-t border-gray-300 w-full"></span>
        </div>

        {/* Skills Section */}
        <button
          type="button"
          className="flex items-center justify-between w-full p-2 font-medium rtl:text-right"
          onClick={() => toggleAccordion("skills")}
        >
          <span>Skills</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform duration-300 ${
              openSections.skills ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
        <div className={`${openSections.skills ? "" : "hidden"} p-2`}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            )}
          </div>

          {/* Dropdown list */}
          {searchTerm && (
            <ul className="border border-gray-300 rounded p-2 mt-2 max-h-40 overflow-y-auto">
              {filteredSkills.length > 0 ? (
                filteredSkills.map((skill, index) => (
                  <li
                    key={index}
                    onClick={() => handleSkillClick(skill)}
                    className="p-1 hover:bg-gray-100 cursor-pointer"
                  >
                    {skill}
                  </li>
                ))
              ) : (
                <li className="p-1 text-gray-500">No skills found</li>
              )}
            </ul>
          )}

          {/* Selected skills tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 text-gray-800 px-2 py-1 rounded"
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(skill)}
                  className="ml-2 text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobfilters;
