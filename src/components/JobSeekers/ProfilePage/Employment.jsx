import { useDispatch, useSelector } from "react-redux";
import EmployeementUtility from "../../../utility/EmployeementUtility";
import EmploymentModal from "./Modals/EmploymentModal";
import { FiEdit2 } from "react-icons/fi";
import { toggleEmploymentModal } from "../../../redux/modal/modalSlice";

function Employment() {
  const employeeUtility = EmployeementUtility();

  const dispatch = useDispatch();
  const hasAccess = useSelector((state) => state.otherReducer.canAccessJobSeeker);

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg" id="IT-skills">
            Employment
          </h2>

          {hasAccess && (
            <button
              className="font-semibold text-blue-700"
              onClick={() => dispatch(toggleEmploymentModal())}
            >
              Add details
            </button>
          )}
        </div>

        {employeeUtility.employments.map((employment, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold">{employment.jobTitle}</h3>
              {hasAccess && (
                <button onClick={() => dispatch(toggleEmploymentModal())}>
                  <FiEdit2 className="text-sm text-gray-700" />
                </button>
              )}
            </div>
            <h4>{employment.companyName}</h4>
            {employment.employmentType !== "" ||
            employment.joiningDate !== "" ? (
              <p className="text-gray-500 text-sm">
                <span>{employment.employmentType}</span>
                {employment.employmentType !== "" &&
                employment.joiningDate !== ""
                  ? " | "
                  : ""}
                <span>
                  {employment.joiningDate} to{" "}
                  {employment.isCurrentEmployment
                    ? "Present"
                    : employment.endDate}
                </span>
              </p>
            ) : (
              <></>
            )}
            {employment.noticePeriod > 0 ? (
              <p className="text-gray-700 text-sm">
                {employment.noticePeriod} Month
                {employment.noticePeriod > 1 ? "s" : ""} Notice Period
              </p>
            ) : (
              <></>
            )}
            <p className="text-gray-900 text-sm">
              {employeeUtility.isExpanded.includes(employment.id)
                ? employment.jobProfile
                : `${employment.jobProfile.slice(0, 200)}... `}
              <button
                onClick={() =>
                  employeeUtility.setIsExpanded((prev) =>
                    !prev.includes(employment.id)
                      ? [employment.id, ...prev]
                      : prev.filter((item) => item !== employment.id)
                  )
                }
                className="text-blue-700 text-xs font-semibold"
              >
                {employeeUtility.isExpanded.includes(employment.id)
                  ? "Read Less"
                  : "Read More"}
              </button>
            </p>
          </div>
        ))}
      </div>

      <EmploymentModal />
    </>
  );
}

export default Employment;
