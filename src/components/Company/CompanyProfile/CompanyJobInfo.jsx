import React from "react";
import { GoCheckCircleFill } from "react-icons/go";
import boyPic from "../../../assets/white-boy.a0d2814a.png";

function CompanyJobInfo() {
  return (
    <div className="bg-white border rounded-lg p-7 flex flex-col items-center gap-5 w-1/4 sticky top-10 h-fit">
      <img src={boyPic} alt="" className=" w-1/2" />
      <h2 className="font-semibold">On registering, you can</h2>
      <div className="flex gap-1 w-full font-medium">
        <GoCheckCircleFill className="text-green-500 w-1/12 mt-1" />
        <p className="text-gray-600 text-sm w-auto">
          Build your own profile and let recruiters find you
        </p>
      </div>
      <div className="flex gap-1 w-full font-medium">
        <GoCheckCircleFill className="text-green-500 w-1/12 mt-1" />
        <p className="text-gray-600 text-sm w-auto">
          Get job postings delivered right to your email
        </p>
      </div>
      <div className="flex gap-1 w-full font-medium">
        <GoCheckCircleFill className="text-green-500 w-1/12 mt-1" />
        <p className="text-gray-600 text-sm w-auto">
          Find a job and grow your career
        </p>
      </div>
      <button className="text-white bg-blue-600 py-1.5 px-3 rounded-full">
        Add Job
      </button>
    </div>
  );
}

export default CompanyJobInfo;
