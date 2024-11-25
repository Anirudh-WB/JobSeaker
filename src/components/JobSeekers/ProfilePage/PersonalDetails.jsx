import React from "react";
import { FiEdit2 } from "react-icons/fi";
import PersonalDetailsModal from "./Modals/PersonalDetailsModal";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import PersonalDetailsUtility from "../../../utility/PersonalDetailsUtility";
import ProfileUtility from "../../../utility/ProfileUtility";
import { useDispatch } from "react-redux";
import { togglePersonalDetailsModal } from "../../../redux/modal/modalSlice";

function PersonalDetails() {
  const utility = PersonalDetailsUtility();
  const profileUtility = ProfileUtility();

  const dispatch = useDispatch();

  return (
    <>
      <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-lg" id="PersonalDetails">
            Personal Details
          </h2>
          {profileUtility.canAccess && (
            <button onClick={() => dispatch(togglePersonalDetailsModal())}>
              <FiEdit2 className="text-sm text-gray-700" />
            </button>
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">Personal</h3>
              <p className="font-semibold text-sm">
                {utility.personalDetails.gender},{" "}
                {utility.personalDetails.marritalStatus},{" "}
                {profileUtility.canAccess && (
                  <a href="/" className="text-sm text-blue-700 font-semibold">
                    Add more info
                  </a>
                )}
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Carreer break
              </h3>
              <p className="font-semibold text-sm">
                {utility.personalDetails.careerBreak}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Date of birth
              </h3>
              <p className="font-semibold text-sm">
                {utility.personalDetails.dateOfBirth}
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Work permit
              </h3>
              <p>
                {utility.personalDetails.workPermit}{" "}
                {profileUtility.canAccess && (
                  <a href="/" className="text-sm text-blue-700 font-semibold">
                    Add Work permit
                  </a>
                )}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">Category</h3>
              <p className="font-semibold text-sm">
                {utility.personalDetails.category}
              </p>
            </div>
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">Address</h3>
              <p className="font-semibold text-sm">
                {utility.personalDetails.address}
              </p>
            </div>
          </div>

          <div className="flex w-full">
            <div className="w-1/2">
              <h3 className="text-gray-500 text-sm font-semibold">
                Differently abled
              </h3>
              <p className="font-semibold text-sm">
                {utility.personalDetails.differentlyAble}
              </p>
            </div>
          </div>

          <div>
            <span className="sm:block border-t border-gray-300 w-full"></span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-1 items-center justify-between">
            <h2 className="font-semibold text-base" id="PersonalDetails">
              Languages
            </h2>
            {profileUtility.canAccess && (
              <a href="/" className="text-base font-semibold text-blue-700">
                Add languages
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <div className="flex flex-col gap-2">
              <div className="w-full text-gray-500 font-semibold text-sm text-left flex flex-1 items-center gap-10">
                <h3 className="w-1/5">Languages</h3>
                <h3 className="w-1/5">Proficiency</h3>
                <h3 className="w-1/5">Read</h3>
                <h3 className="w-1/5">Write</h3>
                <h3 className="w-1/5">Speak</h3>
              </div>
              <div>
                <span className="sm:block border-t border-gray-300 w-full"></span>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-5">
              {utility.personalDetails.languages.map((language, index) => (
                <div
                  key={index}
                  className="w-full text-sm text-left flex flex-1 items-center gap-10"
                >
                  <h3 className="w-1/5 font-semibold text-gray-700">
                    {language.name}
                  </h3>
                  <h3 className="w-1/5 font-semibold text-gray-700">
                    {language.proficiency}
                  </h3>
                  <h3 className="w-1/5">
                    {language.canRead && (
                      <IoIosCheckmarkCircleOutline className="text-black text-xl" />
                    )}
                  </h3>
                  <h3 className="w-1/5">
                    {language.canWrite && (
                      <IoIosCheckmarkCircleOutline className="text-black text-xl" />
                    )}
                  </h3>
                  <h3 className="w-1/5">
                    {language.canSpeak && (
                      <IoIosCheckmarkCircleOutline className="text-black text-xl" />
                    )}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PersonalDetailsModal setPersonalDetails={utility.setPersonalDetails} />
    </>
  );
}

export default PersonalDetails;
