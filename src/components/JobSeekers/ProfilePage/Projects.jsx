import React from "react";
import { FiEdit2 } from "react-icons/fi";
import ProjectsModal from "./Modals/ProjectsModal";
import ProjectUtility from "../../../utility/ProjectUtility";
import { useDispatch, useSelector } from "react-redux";
import { toggleProjectsModal } from "../../../redux/modal/modalSlice";

function Projects() {
  const utility = ProjectUtility();

  const dispatch = useDispatch();
  const hasAccess = useSelector((state) => state.otherReducer.canAccessJobSeeker);

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="font-semibold text-lg" id="Project">
            Projects
          </h2>
          {hasAccess && (
            <button
              className="font-semibold text-blue-700 cursor-pointer"
              id="Add-Project"
              onClick={() => dispatch(toggleProjectsModal())}
            >
              Add Project
            </button>
          )}
        </div>
        {utility.projectHeadline.map((project, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-sm">{project.title}</span>
              {hasAccess && (
                <button onClick={() => dispatch(toggleProjectsModal())}>
                  <FiEdit2 className="text-sm text-gray-700" />
                </button>
              )}
            </div>
            <span className="font-semibold text-sm">{project.workType}</span>
            <div className="flex gap-1">
              <span className="text-gray-500 text-sm">
                {project.month} {project.year}
              </span>
              <span className="text-gray-500 text-sm">to</span>
              <span className="text-gray-500 text-sm">{project.radio}</span>
            </div>
            <span className="text-black text-sm">
              {utility.isExpanded
                ? project.description
                : `${project.description.slice(0, 200)}... `}
              <button
                onClick={utility.toggleReadMore}
                className="text-blue-700 text-xs font-semibold"
              >
                {utility.isExpanded ? "Read Less" : "Read More"}
              </button>
            </span>
          </div>
        ))}
      </div>
      <ProjectsModal />
    </>
  );
}

export default Projects;
