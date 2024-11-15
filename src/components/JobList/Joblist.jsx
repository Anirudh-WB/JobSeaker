import React from "react";
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
  ];

  return (
    <div className="flex-1 flex flex-col gap-5">
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
  );
}

export default Joblist;
