import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

export default function ProfileHeaderModal({
  isOpen,
  setIsOpen,
  profileHeader,
  setProfileHeader,
}) {
  const [profileHeaderTemp, setProfileHeaderTemp] = useState(profileHeader);
  const [selectedPeriod, setSelectedPeriod] = useState("");

  const options = [
    "15 Days or less",
    "1 Month",
    "2 Months",
    "3 Months",
    "More than 3 Months",
    "Serving Notice Period",
  ];

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setIsOpen((prev) => !prev)}
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
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <RiCloseLargeFill />
                </button>
              </div>
              <DialogTitle as="h3" className="text-xl font-medium">
                Basic Details
              </DialogTitle>

              <div className="mt-4 flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Name <span className="text-red-600">*</span>
                  </span>
                  <input
                    type="text"
                    placeholder="e.g.. John Doe"
                    className="outline-none border p-2 w-full rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">Work status</span>
                  <span className="text-sm font-semibold text-gray-500">
                    We will personalize your Jobseeker experience based on this
                  </span>
                  <div className="w-1/3  flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="workStatus" value="employed" />
                      <span className="text-sm font-semibold text-gray-700">
                        Fresher
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input type="radio" name="workStatus" value="employed" />
                      <span className="text-sm font-semibold text-gray-700">
                        Experienced
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Total experience <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    This helps recruiters know your years of experience
                  </span>
                  <div className="w-full flex gap-2">
                    <select
                      type="text"
                      className="outline-none border p-2 w-1/2 rounded-xl"
                    />
                    <select
                      type="text"
                      className="outline-none border p-2 w-1/2 rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Current Salary <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    Salary information helps us find relevant jobs for you
                  </span>
                  <input
                    type="text"
                    placeholder="e.g.. 200000"
                    className="outline-none border p-2 w-full rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Salary breakdown <span className="text-red-600">*</span>
                  </span>
                  <select
                    type="text"
                    placeholder="e.g.. 200000"
                    className="outline-none border p-2 w-full rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Current Location <span className="text-red-600">*</span>
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
                  <input
                    type="text"
                    placeholder="Mumbai"
                    className="outline-none border p-2 w-1/3 rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Mobile Number <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    This helps us reach out to you
                  </span>
                  <input
                    type="number"
                    placeholder="e.g.. 8956238529"
                    className="outline-none border p-2 w-full rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-base font-semibold">
                    Email Address <span className="text-red-600">*</span>
                  </span>
                  <span className="text-sm font-semibold text-gray-500">
                    We will send relevant jobs and updates to this email
                  </span>
                  <input
                    type="number"
                    placeholder="e.g.. xyz@gmail.com"
                    className="outline-none border p-2 w-full rounded-xl"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Notice period <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500 font-semibold">
                    Lets recruiters know your availability to join
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {options.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedPeriod(option)}
                        className={`px-4 py-2 rounded-full border text-sm ${
                          selectedPeriod === option
                            ? "bg-gray-200 font-semibold border-gray-400"
                            : "bg-white text-gray-500 border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-10 font-semibold">
                <button
                  className="text-blue-700"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 px-7 py-2 rounded-full"
                  onClick={() => {
                    setIsOpen((prev) => !prev);
                  }}
                >
                  Save
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
