import React from "react";
import Jobfilters from "../JobList/Jobfilters";
import Joblist from "./Joblist";

function JoblistPage() {
  return (
    <div className="flex gap-5 px-32">
      <Jobfilters />
      <div className="flex flex-col gap-6">
        {/* Compact Search Bar */}
        <form className="w-full my-5 bg-white shadow-md rounded-full">
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
        <Joblist />
      </div>
    </div>
  );
}

export default JoblistPage;
