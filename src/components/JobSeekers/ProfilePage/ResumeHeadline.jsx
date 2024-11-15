import React from "react";
import { FiEdit2 } from "react-icons/fi";
import ResumeHeadlineModal from "./Modals/ResumeHeadlineModal";
import ResumeHeadlineUtility from "../../../utility/ResumeHeadlineUtility";

function ResumeHeadline() {
  const utility = ResumeHeadlineUtility();

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg" id="Resume-headline">
            Resume headline
          </h2>
          <button onClick={utility.toggleModal}>
            <FiEdit2 className="text-sm text-gray-700" />
          </button>
        </div>
        <p className="text-sm text-gray-800">{utility.resumeHeadline}</p>
      </div>
      <ResumeHeadlineModal
        isOpen={utility.isResumeHeadlineOpen}
        toggleModal={utility.toggleModal}
        setResumeHeadline={utility.setResumeHeadline}
      />
    </>
  );
}

export default ResumeHeadline;
