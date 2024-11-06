import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import ProjectsModal from "./ProjectsModal";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectHeadline, setProjectHeadline] = useState([
    {
      title: "Attendance Tracking System (Face Recognition)",
      workType: "W.B (Offsite)",
      startdate: "Feb 2024",
      enddate: "Present (Full Time)",
      description:
        "Attendance Tracking System (Face Recognition) for the first time in the future and will be updated in the future when the system is fully implemented. This project aims to improve efficiency and accuracy in attendance recording, using advanced face recognition technology.",
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="font-semibold text-md" id="Project">
            Projects
          </h2>
          <h2
            className="font-semibold text-blue-700 cursor-pointer"
            id="Add-Project"
            onClick={() => setIsModalOpen(true)}
          >
            Add Project
          </h2>
        </div>
        {projectHeadline.map((project, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-sm">{project.title}</span>
              <button onClick={() => setIsModalOpen(true)}>
                <FiEdit2 className="text-sm text-gray-700" />
              </button>
            </div>
            <span className="font-semibold text-sm">{project.workType}</span>
            <div className="flex gap-1">
              <span className="text-gray-500 text-sm">{project.startdate}</span>
              <span className="text-gray-500 text-sm">to</span>
              <span className="text-gray-500 text-sm">{project.enddate}</span>
            </div>
            <span className="text-black text-sm">
              {isExpanded
                ? project.description
                : `${project.description.slice(0, 200)}... `}
              <button
                onClick={toggleReadMore}
                className="text-blue-700 text-sm font-semibold"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </span>
          </div>
        ))}
      </div>
      <ProjectsModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        projectHeadline={projectHeadline}
        setProjectHeadline={setProjectHeadline}
      />
    </>
  );
}

export default Projects;
