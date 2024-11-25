import React from "react";
import { FiEdit2 } from "react-icons/fi";
import CareersModal from "./Modals/CareersModal";
import CareerUtility from "../../../utility/CareerUtility";
import ProfileUtility from "../../../utility/ProfileUtility";
import { useDispatch } from "react-redux";
import { toggleCareerModal } from "../../../redux/modal/modalSlice";

function Careers() {
  const utility = CareerUtility();
  const profileUtility = ProfileUtility();
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg" id="careers">
            Careers
          </h2>
          {profileUtility.canAccess && (
            <button onClick={() => dispatch(toggleCareerModal())}>
              <FiEdit2 className="text-sm text-gray-700" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Current Industry
              </h3>
              <p className="font-semibold text-sm">
                {utility.careers.currentIndustry}
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Department
              </h3>
              <p className="font-semibold text-sm">
                {utility.careers.department}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Role category
              </h3>
              <p className="font-semibold text-sm">
                {utility.careers.roleCategory}
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">Job role</h3>
              <p className="font-semibold text-sm">{utility.careers.jobRole}</p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Desired job type
              </h3>
              <p className="font-semibold text-sm">
                {utility.careers.desiredJobTypes.join(", ")}
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Desired employee type
              </h3>
              <p className="font-semibold text-sm">
                {utility.careers.employeeType.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Preferred shifts
              </h3>
              <p className="font-semibold text-sm">{utility.careers.shift}</p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Preferred work locations
              </h3>
              <p className="font-semibold text-sm">
                {utility.careers.location.join(", ")}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Expected Salary
              </h3>
              <p className="font-semibold text-sm">{utility.careers.salary}</p>
            </div>
          </div>
        </div>
      </div>

      <CareersModal />
    </>
  );
}

export default Careers;
