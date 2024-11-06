import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import ResumeHeadlineModal from "./ResumeHeadlineModal";

function ResumeHeadline() {
  let [isResumeHeadlineOpen, setIsResumeHeadlineOpen] = useState(false);

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-md" id="Resume-headline">
            Resume headline
          </h2>
          <button onClick={() => setIsResumeHeadlineOpen((prev) => !prev)}>
            <FiEdit2 className="text-sm text-gray-700" />
          </button>
        </div>
        <p className="text-sm text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nihil
          veritatis sunt ducimus quo ad saepe voluptas dolorum corporis odio.
          Totam maxime quis nam nulla non sapiente quo optio unde!
        </p>
      </div>
      <ResumeHeadlineModal
        isOpen={isResumeHeadlineOpen}
        setIsOpen={setIsResumeHeadlineOpen}
      />
    </>
  );
}

export default ResumeHeadline;
