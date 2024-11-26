import React from "react";
import { FiEdit2 } from "react-icons/fi";
import ResumeHeadlineModal from "./Modals/ResumeHeadlineModal";
import ResumeHeadlineUtility from "../../../utility/ResumeHeadlineUtility";
import { useDispatch, useSelector } from "react-redux";
import { toggleResumeHeadlineModal } from "../../../redux/modal/modalSlice";

function ResumeHeadline() {
  const utility = ResumeHeadlineUtility();

  const dispatch = useDispatch();
  const hasAccess = useSelector(
    (state) => state.otherReducer.canAccessJobSeeker
  );

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg" id="Resume-headline">
            Resume headline
          </h2>
          {hasAccess && (
            <button onClick={() => dispatch(toggleResumeHeadlineModal())}>
              <FiEdit2 className="text-sm text-gray-700" />
            </button>
          )}
        </div>
        <p className="text-sm text-gray-800">{utility.resumeHeadline}</p>
      </div>
      <ResumeHeadlineModal setResumeHeadline={utility.setResumeHeadline} />
    </>
  );
}

export default ResumeHeadline;
