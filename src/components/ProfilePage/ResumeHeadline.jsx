import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import ResumeHeadlineModal from "./Modals/ResumeHeadlineModal";

function ResumeHeadline() {
  let [isResumeHeadlineOpen, setIsResumeHeadlineOpen] = useState(false);
  let [resumeHeadline, setResumeHeadline] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg" id="Resume-headline">
            Resume headline
          </h2>
          <button onClick={() => setIsResumeHeadlineOpen((prev) => !prev)}>
            <FiEdit2 className="text-sm text-gray-700" />
          </button>
        </div>
        <p className="text-sm text-gray-800">{resumeHeadline}</p>
      </div>
      <ResumeHeadlineModal
        isOpen={isResumeHeadlineOpen}
        setIsOpen={setIsResumeHeadlineOpen}
        resumeHeadline={resumeHeadline}
        setResumeHeadline={setResumeHeadline}
      />
    </>
  );
}

export default ResumeHeadline;
