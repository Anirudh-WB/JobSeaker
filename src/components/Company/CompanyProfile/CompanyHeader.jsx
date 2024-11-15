import { GrLocation } from "react-icons/gr";
import { FiPhone, FiEdit2 } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { useState } from "react";
import { FaLink } from "react-icons/fa6";

function CompanyHeader() {
  const [data, setData] = useState([
    {
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
    },
  ]);

  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center justify-center gap-10">
      <img
        src={data[0].companyLogoUrl}
        alt="company-logo"
        className="rounded-full h-36 w-36 shadow-md"
      />

      <div className="flex flex-col gap-5 w-4/5">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <div className="flex items-end gap-4">
              <h1 className="text-2xl font-bold">{data[0].companyName}</h1>
              <button>
                <FiEdit2 className="text-sm text-gray-700 mb-1" />
              </button>
            </div>
            <p className="font-semibold text-lg text-gray-700">
              {data[0].companyTagLine}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Profile last updated -{" "}
              <span className="text-gray-700">{data[0].lastUpdated}</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex gap-4 text-sm text-gray-700">
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <GrLocation /> {data[0].contactInfo.companyAddress}
            </p>
            <p className="flex items-center gap-1">
              <FaLink /> {data[0].contactInfo.companyWebsite}
            </p>
            
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <FiPhone /> {data[0].contactInfo.companyPhone}
            </p>
            <p className="flex items-center gap-1">
              <MdMailOutline /> {data[0].contactInfo.companyEmail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
