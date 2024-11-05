import React from "react";
import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";

function ProfileHeader() {
  return (
    <div className="bg-white p-6 shadow-lg rounded-2xl flex items-center justify-center gap-10">
      <div className="rounded-full border-[6px] border-green-500 p-2 relative">
        <img
          src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/05/team5-200x200.jpg"
          alt="profile-pic"
          className="rounded-full h-36 w-36"
        />
        <span className="text-xs text-green-500 absolute left-1/2 transform -translate-x-1/2 -translate-y-1 bg-white p-1 px-2 rounded-full">
          100%
        </span>
      </div>
      <div className="flex flex-col gap-5 w-4/5">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="font-semibold text-lg text-gray-700">Team Lead</p>
            <p className="text-gray-700">at Facebook</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Profile last updated -{" "}
              <span className="text-gray-700">03 Nov, 2024</span>
            </p>
          </div>
        </div>
        <hr />
        <div className="flex gap-2 text-sm text-gray-700">
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <GrLocation /> Mumbai, INDIA
            </p>
            <p className="flex items-center gap-1">
              <IoBriefcaseOutline /> 12 Years
            </p>
            <p className="flex items-center gap-1">
              <CiWallet />
              21,00,000{" "}
              <span className="font-semibold text-blue-700 px-2">
                Add breakup
              </span>
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-2 w-1/2">
            <p className="flex items-center gap-1">
              <FiPhone /> 7418529630
            </p>
            <p className="flex items-center gap-1">
              <MdMailOutline /> email@gmail.com
            </p>
            <p className="flex items-center gap-1">
              <LuCalendar /> 1 Month notice period
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
