import { GrLocation } from "react-icons/gr";
import { FiPhone, FiEdit2 } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa6";

function CompanyHeader() {
  const [data, setData] = useState({
    companyLogoUrl:
      "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
    companyTagLine: "As tech goes we grows",
    companyName: "AsTechGoes",
    contactInfo: {
      companyEmail: "astech@gmail.com",
      companyPhone: "+91 78946 147525",
      companyWebsite: "http://www.tech.com",
      companyAddress: "Mumbai, India",
    },
    lastUpdated: "November 15, 2024",
    contactPerson: {
      name: "John Doe",
      title: "Customer Support Manager",
      email: "john.doe@tech.com",
      phone: "+91 98765 43210",
    },
  });

  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center justify-center gap-10">
      <img
        src={data.companyLogoUrl}
        alt="company-logo"
        className="rounded-full h-48 w-48 shadow-2xl"
      />

      <div className="flex flex-col gap-3 w-4/5">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <div className="flex items-end gap-4">
              <h1 className="text-2xl font-bold">{data.companyName}</h1>
              <button>
                <FiEdit2 className="text-sm text-gray-700 mb-1" />
              </button>
            </div>
            <p className="font-semibold text-lg text-gray-700">
              {data.companyTagLine}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Profile last updated -{" "}
              <span className="text-gray-700">{data.lastUpdated}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-black font-semibold">Company Details</label>
          <hr className="flex-1 border-t border-gray-300" />
        </div>
        <div className="flex gap-4 text-sm text-gray-700">
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <GrLocation /> {data.contactInfo.companyAddress}
            </p>
            <p className="flex items-center gap-1">
              <LuCalendar /> {data.contactInfo.companyWebsite}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <MdMailOutline /> {data.contactInfo.companyEmail}
            </p>
            <p className="flex items-center gap-1">
              <FiPhone /> {data.contactInfo.companyPhone}
            </p>
          </div>
        </div>
        {/* Contact Person Information */}
        <div className="flex items-center gap-4">
          <label className="text-black font-semibold">Contact Person</label>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        <div className="flex gap-4 text-sm text-gray-700">
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <FaRegUser /> {data.contactPerson.name}
            </p>
            <p className="flex items-center gap-1">
              <LuCalendar /> {data.contactPerson.title}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <FiPhone /> {data.contactPerson.phone}
            </p>
            <p className="flex items-center gap-1">
              <MdMailOutline /> {data.contactPerson.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
