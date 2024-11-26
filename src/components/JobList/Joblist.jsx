import React from "react";
import { PiHandbagSimple } from "react-icons/pi";
import { BiRupee } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import CommonUtility from "../../utility/CommonUtility";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function Joblist() {
  const commonUtility = CommonUtility();
  
  const hasAccess = useSelector((state) => state.otherReducer.canAccessCompany);

  return (
    <div className="flex-1 flex flex-col gap-5">
      {commonUtility.jobs.map((job, index) => (
        <div
          key={index}
          className="bg-white border rounded-md border-gray-200 shadow-lg p-5"
        >
          <div className="flex flex-1 justify-between">
            <div className="flex flex-col gap">
              <h1 className="text-xl font-semibold">{job.title}</h1>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>

            {hasAccess && (
              <a
                href="/applicants-list"
                className="flex items-center gap-1 text-sm font-semibold text-gray-700"
              >
                <FaUser className="text-xs" />
                {job.applied} Applied
              </a>
            )}
          </div>

          <div className="flex justify-start items-center mt-3 space-x-3">
            <div className="flex items-center p-2">
              <PiHandbagSimple className="text-gray-500 text-lg" />
              <span className="ml-2 text-sm">{job.experience}</span>
            </div>

            <span className="hidden sm:block border-l border-gray-300 h-5"></span>

            <div className="flex items-center p-2">
              <BiRupee className="text-gray-500 text-lg" />
              <span className="ml-2 text-sm">{job.salary}</span>
            </div>

            <span className="hidden sm:block border-l border-gray-300 h-5"></span>

            <div className="flex items-center p-2">
              <IoLocationOutline className="text-gray-500 text-lg" />
              <span className="ml-2 text-sm">{job.location}</span>
            </div>
          </div>

          <div className="flex items-center p-2">
            <CgNotes className="text-gray-500 text-lg" />
            <span className="ml-2 text-sm">{job.workOptions}</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap text-sm p-2 text-gray-700">
            {job.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="border rounded-full px-3 py-1 text-sm text-gray-600 hover:bg-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Joblist;
