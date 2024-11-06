import React from "react";
import Jobfilters from "../JobList/Jobfilters";
import { PiHandbagSimple } from "react-icons/pi";
import { BiRupee } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";

function Joblist() {
  const jobs = [
    {
      title: "Associate Software Developer",
      company: "XYZ Corporation Inc",
      experience: "4-5 yrs",
      salary: "Not Disclosed",
      location: "Mumbai",
      workOptions: "Full-time, remote, working from home, flexible schedule",
      skills: [
        "C#",
        "Asp.Net Core",
        ".Net Core",
        "Ms Sql Server",
        "Entity Framework",
        "Asp.Net",
        "Asp.Net Mvc5",
        "Web Api",
      ],
    },
    {
      title: "Senior Software Developer",
      company: "Yashu Corporation Inc",
      experience: "0-10 yrs",
      salary: "Not Disclosed",
      location: "Padhgha",
      workOptions: "Full-time, remote, working from home, flexible schedule",
      skills: [
        "C#",
        "Asp.Net Core",
        ".Net Core",
        "Ms Sql Server",
        "Entity Framework",
        "Asp.Net",
        "Asp.Net Mvc5",
        "Web Api",
      ],
    },
    {
      title: "Team Lead",
      company: "Yashu Corporation Inc",
      experience: "0-15 yrs",
      salary: "Not Disclosed",
      location: "Bangalore",
      workOptions: "Full-time, remote, working from home, flexible schedule",
      skills: [
        "C#",
        "Asp.Net Core",
        ".Net Core",
        "Ms Sql Server",
        "Entity Framework",
        "Asp.Net",
        "Asp.Net Mvc5",
        "Web Api",
      ],
    },
    // More job objects can be added here
  ];

  return (
    <div className="flex gap-5 px-32">
      <Jobfilters />
      <div>
        {/* Compact Search Bar */}
        <form className="w-full mt-5 bg-white shadow-md rounded-full">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 p-2">
            {/* Search Icon */}
            <div className="flex items-center text-gray-400">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13z"
                />
              </svg>
            </div>

            {/* Skills Input */}
            <input
              type="text"
              className="flex-grow bg-transparent text-gray-600 placeholder-gray-500 px-2 text-sm focus:outline-none"
              placeholder="Enter skills/designations/companies"
            />

            {/* Divider (hidden on smaller screens) */}
            <span className="hidden sm:block border-l border-gray-300 h-5"></span>

            {/* Experience Select */}
            <select className="bg-transparent text-gray-600 placeholder-gray-500 px-2 text-sm focus:outline-none">
              <option value="0-2">0 - 2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
            </select>

            {/* Divider (hidden on smaller screens) */}
            <span className="hidden sm:block border-l border-gray-300 h-5"></span>

            {/* Location Input */}
            <input
              type="text"
              className="flex-grow bg-transparent text-gray-600 placeholder-gray-500 px-2 text-sm focus:outline-none"
              placeholder="Enter location"
            />

            {/* Search Button */}
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-1 sm:px-6 sm:py-2 focus:outline-none w-full sm:w-auto text-sm"
            >
              Search
            </button>
          </div>
        </form>

        {/* Job Listings */}
        <div className="mt-5 flex-1 flex flex-col gap-5">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border rounded border-gray-200 shadow-lg p-5"
            >
              <div>
                <h1 className="text-xl font-semibold">{job.title}</h1>
                <p className="text-sm text-gray-600">{job.company}</p>
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
                    className="border rounded-full px-3 py-1 text-sm text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Joblist;
