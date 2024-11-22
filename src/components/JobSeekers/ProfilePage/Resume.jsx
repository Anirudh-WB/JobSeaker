import React from "react";
import { FiDownload } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

function Resume() {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md h-fit flex flex-col gap-4">
      <h2 className="font-semibold text-lg" id="Resume">Resume</h2>
      <div className="flex items-center justify-between">
        <div className="text-sm">
          <h3 className="font-semibold">John Resume.pdf</h3>
          <p className="text-gray-500">Uploaded on Nov 03, 2024</p>
        </div>
        <div className="flex gap-5">
          <button className="p-2.5 bg-gray-100 text-blue-700 rounded-full">
            <FiDownload />
          </button>
          <button className="p-2.5 bg-gray-100 text-blue-700 rounded-full">
            <RiDeleteBinLine />
          </button>
        </div>
      </div>
      <div className="border rounded-lg border-dashed border-gray-400 flex flex-col items-center justify-center gap-1 p-7 text-sm">
        <button className="border border-blue-700 text-blue-700 rounded-full px-4 py-1.5 font-semibold">
          Update resume
        </button>
        <p className="text-gray-600">
          Supported Formats: doc, docx, rtf, pdf, upto 2 MB
        </p>
      </div>
    </div>
  );
}

export default Resume;
