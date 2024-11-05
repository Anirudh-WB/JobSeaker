import React from "react";
import Jobfilters from "../JobList/Jobfilters";
import { PiHandbagSimple } from "react-icons/pi";

function Joblist() {
  return (
    <div className="flex gap-2 px-32">
      <Jobfilters />

      <div className="mt-5 flex-1 bg-white border rounded border-gray-200 shadow">
        <div>
            <h1 className="text-xl font-semibold p-3">Associate Software Developer</h1>
            <p className="text-sm pr-3 pl-3 pb-3">Senior Software Developer at XYZ Corp.</p>
        </div>

        <div>
            <div>
                <PiHandbagSimple size={32} className="text-gray-500" />
                <span className="ml-2 text-sm">Full-time</span>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>

      </div>
    </div>
  );
}

export default Joblist;
