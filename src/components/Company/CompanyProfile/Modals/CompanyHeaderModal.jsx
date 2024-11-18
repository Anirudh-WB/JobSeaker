import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { RiCloseLargeFill } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from "react-toastify";
import CommonUtility from "../../../../utility/CommonUtility";
import CompanyHeaderUtility from "../../../../utility/CompanyHeaderUtility";

export default function CompanyHeaderModal({ isOpen, toggleCompanyHeader }) {
  const commonUtility = CommonUtility();
  const companyHeaderUtility = CompanyHeaderUtility();

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={toggleCompanyHeader}
        __demoMode
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-1/2 rounded-3xl bg-white p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex justify-end w-full">
                <button
                  className="text-xl text-gray-500"
                  onClick={toggleCompanyHeader}
                >
                  <RiCloseLargeFill />
                </button>
              </div>
              <DialogTitle as="h3" className="text-xl font-medium">
                Company Details
              </DialogTitle>

              <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Name <span className="text-red-600">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Name
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Motive <span className="text-red-600">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=""
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Motive
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Location <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    This helps us find relevant jobs for you
                  </span>
                  <div className="w-1/3  flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="workStatus" value="employed" />
                      <span className="text-sm font-semibold text-gray-700">
                        India
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="workStatus" value="employed" />
                      <span className="text-sm font-semibold text-gray-700">
                        Outside India
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-1/3 outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Location
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Mobile Number <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    This helps us reach out to you
                  </span>
                  <div className="relative">
                    <input
                      type="number"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Conatact No.
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Email Address <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    We will send canditates to you
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Email
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Website <span className="text-red-600">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=""
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Website
                    </label>
                  </div>
                </div>

                <div className="flex items-center gap-1 w-full">
                  <h3 className="font-semibold text-lg">Contact Person</h3>
                  <hr className="flex-1 border-gray-200 border mt-1" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Name <span className="text-red-600">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=""
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Name
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Mobile Number <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    This helps us reach out to you
                  </span>
                  <div className="relative">
                    <input
                      type="number"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Conatact No.
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Email Address <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    We will send canditates to you
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Email
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Designation <span className="text-red-600">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=""
                    />
                    <label
                      for="floating_outlined"
                      className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Website
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-10 font-semibold">
                <button className="text-blue-700" onClick={toggleCompanyHeader}>
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 px-7 py-2 rounded-full"
                  onClick={() => {
                    toggleCompanyHeader();
                    toast.success("Company Details saved successfully", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      transition: Bounce,
                    });
                  }}
                >
                  Save
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <ToastContainer
        containerId="company__header__toast"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}
