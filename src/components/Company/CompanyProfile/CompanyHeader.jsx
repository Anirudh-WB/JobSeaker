import { GrLocation } from "react-icons/gr";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { LuCalendar } from "react-icons/lu";
import { CiWallet } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import ProfileHeaderModal from "../../JobSeekers/ProfilePage/Modals/ProfileHeaderModal";
import ProfileHeaderUtility from "../../../utility/ProfileHeaderUtility";

function CompanyHeader() {
  const utility = ProfileHeaderUtility();
 
  return (
    <>
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
              <div className="flex items-end gap-4">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <button onClick={utility.toggleProfileHeader}>
                  <FiEdit2 className="text-sm text-gray-700 mb-1" />
                </button>
              </div>
              <p className="font-semibold text-lg text-gray-700">{utility.projectHeader[0].role}</p>
              <p className="text-gray-700">at Facebook</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Profile last updated -{" "}
                <span className="text-gray-700">{utility.projectHeader[0].lastUpdated}</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="flex gap-2 text-sm text-gray-700">
            <div className="flex flex-col gap-2 w-1/2">
              <p className="flex items-center gap-1">
                <GrLocation /> {utility.projectHeader[0].location}
              </p>
              <p className="flex items-center gap-1">
                <IoBriefcaseOutline /> {utility.projectHeader[0].exp} Years
              </p>
              <p className="flex items-center gap-1">
                <CiWallet />
                {utility.projectHeader[0].salary}{" "}
                <span className="font-semibold text-blue-700 px-2">
                  Add breakup
                </span>
              </p>
            </div>
            <hr />
            <div className="flex flex-col gap-2 w-1/2">
              <p className="flex items-center gap-1">
                <FiPhone /> {utility.projectHeader[0].contact}
              </p>
              <p className="flex items-center gap-1">
                <MdMailOutline /> {utility.projectHeader[0].email}
              </p>
              <p className="flex items-center gap-1">
                <LuCalendar /> {utility.projectHeader[0].noticePeriod} Month notice period
              </p>
            </div>
          </div>
        </div>
      </div>
      <ProfileHeaderModal
        isOpen={utility.isProjectHeaderOpen}
        toggleProfileHeader={utility.toggleProfileHeader}
      />
    </>
  );
}

export default CompanyHeader;
