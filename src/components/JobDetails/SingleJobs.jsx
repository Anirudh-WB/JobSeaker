import React from "react";
import { PiHandbagSimple } from "react-icons/pi";
import { BiRupee } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

function SingleJobs() {
  const isLoggedIn = false;
  const jobs = [
    {
      title: "Associate Software Developer",
      company: "XYZ Corporation Inc",
      experience: "4-5 yrs",
      salary: "Not Disclosed",
      location: "Mumbai",
      description: "Full-time, remote, working from home, flexible schedule",
      posted: "30+ day ago",
      opening: 1,
      applicant: 875,
    },
  ];
  return (
    <div className="px-36">
      <div className="mt-5 flex-1 flex flex-col gap-5 rounded h-fit">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border rounded border-gray-200 shadow h-fit p-5"
          >
            <div className="p-3">
              <h1 className="text-xl font-semibold">{job.title}</h1>
              <p className="text-sm text-gray-600">{job.company}</p>
            </div>

            <div className="flex justify-start items-center">
              <div className="flex items-center p-2">
                <PiHandbagSimple className="text-gray-500 text-lg" />
                <span className="ml-2 text-sm">{job.experience}</span>
              </div>

              <span className="hidden sm:block border-l border-gray-300 h-5"></span>

              <div className="flex items-center p-2">
                <BiRupee className="text-gray-500 text-lg" />
                <span className="ml-2 text-sm">{job.salary}</span>
              </div>
            </div>

            <div className="flex items-center p-2">
              <IoLocationOutline className="text-gray-500 text-lg" />
              <span className="ml-2 text-sm">{job.location}</span>
            </div>

            <div className="p-2">
              <span className="sm:block border-t border-gray-300 w-full"></span>
            </div>

            <div className="flex items-center p-2">
              <div>
                <span className="text-sm text-gray-600">
                  Posted: <span className="font-bold">{job.posted}</span>
                </span>
                <span className="ml-2 text-sm text-gray-600">
                  Opening: <span className="font-bold">{job.opening}</span>
                </span>
                <span className="ml-2 text-sm text-gray-600">
                  Applicants: <span className="font-bold">{job.applicant}</span>
                </span>
              </div>
              {isLoggedIn ? (
                <div className="flex gap-4 items-center ml-auto">
                  <button className="text-blue-600 bg-white border border-blue-600 hover:bg-blue-100 rounded-full px-4 py-2 sm:px-6 focus:outline-none w-full sm:w-auto">
                    Save
                  </button>
                  <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-2 sm:px-6 focus:outline-none w-full sm:w-auto">
                    Apply Now
                  </button>
                </div>
              ) : (
                <div className="flex gap-4 items-center ml-auto">
                  <button className="text-blue-600 bg-white border border-blue-600 hover:bg-blue-100 rounded-full px-4 py-2 sm:px-6 focus:outline-none w-full sm:w-auto">
                    Register to apply
                  </button>
                  <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-2 sm:px-6 focus:outline-none w-full sm:w-auto">
                    Login to apply
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleJobs;
