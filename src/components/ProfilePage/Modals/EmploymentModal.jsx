import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  CloseButton,
} from "@headlessui/react";
import { RiCloseLargeFill } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from "react-toastify";
import CommonUtility from "../../../utility/CommonUtility";

export default function EmploymentModal({ isOpen, toggleEmployment }) {
  const commonUtility = CommonUtility();
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={toggleEmployment}
        __demoMode
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-1/2 rounded-3xl bg-white p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex justify-end w-full">
                <CloseButton
                  as="button"
                  className="text-xl text-gray-500"
                  onClick={toggleEmployment}
                >
                  <RiCloseLargeFill />
                </CloseButton>
              </div>
              <DialogTitle as="h3" className="text-xl font-medium">
                Employment
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Details like job title, company name, etc, help employers
                understand your work
              </p>
              <div className="my-6 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Is this your current employment?
                  </h3>
                  <div className="flex w-2/3 items-center">
                    <div className="w-1/2 flex gap-2 items-center">
                      <input type="radio" name="currentEmployment" id="" />
                      <label htmlFor="">Yes</label>
                    </div>
                    <div className="w-1/2 flex gap-2 items-center">
                      <input type="radio" name="currentEmployment" id="" />
                      <label htmlFor="">No</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">Employment type</h3>
                  <div className="flex w-2/3 items-center ">
                    <div className="w-1/2 flex gap-2 items-center">
                      <input type="radio" name="currentEmployment" id="" />
                      <label htmlFor="">Full-time</label>
                    </div>
                    <div className="w-1/2 flex gap-2 items-center">
                      <input type="radio" name="currentEmployment" id="" />
                      <label htmlFor="">Internship</label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Total experience <span className="text-red-500">*</span>
                  </h3>
                  <div className="mt-1 w-full flex flex-1 gap-2">
                    <div className="relative w-1/2">
                      <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700">
                        {commonUtility.yearOptions.map((year, index) => (
                          <option value={year} key={index}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Year
                      </label>
                    </div>
                    <div className="relative w-1/2">
                      <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700">
                        {commonUtility.monthOptions.map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Month
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Current company name <span className="text-red-500">*</span>
                  </h3>
                  <div class="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      class="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Organization
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Current job title <span className="text-red-500">*</span>
                  </h3>
                  <div class="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      class="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Designation
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Joining date <span className="text-red-500">*</span>
                  </h3>
                  <div className="mt-1 w-full flex flex-1 gap-2">
                    <div className="relative w-1/2">
                      <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700 text-base">
                        <option>Select year</option>
                        {commonUtility.yearOptions.map((year, index) => (
                          <option value={year} key={index}>
                            {year}
                          </option>
                        ))}
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Year
                      </label>
                    </div>
                    <div className="relative w-1/2">
                      <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700">
                        <option>Select month</option>
                        {commonUtility.yearOptions.map((month, index) => (
                          <option value={month} key={index}>
                            {month}
                          </option>
                        ))}
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Month
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Current Salary <span className="text-red-500">*</span>
                  </h3>
                  <div class="relative">
                    <input
                      type="number"
                      id="floating_outlined"
                      class="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Current Salary
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Skills used <span className="text-red-500">*</span>
                  </h3>
                  <div class="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      class="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Add Skills
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">Job profile</h3>
                  <div class="relative">
                    <textarea
                      type="text"
                      id="floating_outlined"
                      class="w-full outline-none border rounded-md p-2 peer resize-none"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Type here...
                    </label>
                  </div>
                  <span className="text-xs text-gray-500 text-right">
                    4000 character(s) left
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-medium">
                    Notice period <span className="text-red-500">*</span>
                  </h3>
                  <div className="mt-1 w-full flex flex-1 gap-2">
                    <div className="relative w-full">
                      <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700">
                        {commonUtility.noticePeriodNumber.map((num, index) => (
                          <option value={num} key={index}>
                            {num} months
                          </option>
                        ))}
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Notice period
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-10 font-semibold">
                <button className="text-blue-700" onClick={toggleEmployment}>
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 px-7 py-2 rounded-full"
                  onClick={() => {
                    toggleEmployment();
                    toast.success("Employeement details saved successfully", {
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
        containerId="employeeId"
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
