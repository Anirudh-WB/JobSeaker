import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

export default function PersonalDetailsModal({
  isOpen,
  setIsOpen,
  personalDetails,
  setPersonalDetails,
}) {
  const [personalDetailsTemp, setPersonalDetailsTemp] =
    useState(personalDetails);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const sections = [1, 2, 3];

  const jsonData = [
    {
      gender: ["Male", "Female", "Transgender"],
      maritialStatus: [
        "Single/unmarried",
        "Married",
        "Widowed",
        "Divorced",
        "Separated",
        "Other",
      ],
      category: [
        "General",
        "Scheduled Caste (SC)",
        "Scheduled Tribes (ST)",
        "OBC",
        "Other",
      ],
    },
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
                Personal Details
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                This information is important for employers to know you better
              </p>

              <div className="mt-4 flex flex-col gap-5">
                {/* Gender Selection */}
                <div className="flex flex-col gap">
                  <label className="text-base font-semibold">Gender</label>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {jsonData[0].gender.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedGender(option)}
                        className={`px-4 py-2 rounded-full border text-sm ${
                          selectedGender === option
                            ? "bg-gray-200 font-semibold border-gray-400"
                            : "bg-white text-gray-500 font-semibold border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Marital Status Selection */}
                <div className="flex flex-col gap">
                  <label className="text-base font-semibold">
                    Marital Status
                  </label>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {jsonData[0].maritialStatus.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedMaritalStatus(option)}
                        className={`px-4 py-2 rounded-full border text-sm ${
                          selectedMaritalStatus === option
                            ? "bg-gray-200 font-semibold border-gray-400"
                            : "bg-white text-gray-500 font-semibold border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date of Birth Selection */}
                <div className="flex flex-col gap-1">
                  <label className="text-base font-semibold">
                    Date of Birth
                  </label>
                  <div className="w-full flex flex-1 items-center gap-2">
                    <select
                      name="date"
                      className="w-1/3 outline-none border p-2 rounded-xl"
                    >
                      <option value="" className="text-gray-700">
                        Day
                      </option>
                    </select>

                    <select
                      name="month"
                      className="w-1/3 outline-none border p-2 rounded-xl"
                    >
                      <option value="" className="text-gray-700">
                        Month
                      </option>
                    </select>

                    <select
                      name="year"
                      className="w-1/3 outline-none border p-2 rounded-xl"
                    >
                      <option value="" className="text-gray-700">
                        Year
                      </option>
                    </select>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="flex flex-col gap">
                  <label className="text-base font-semibold">Category</label>
                  <p className="mt-1 text-sm text-gray-500 font-medium">
                    Companies welcome people from various categories to bring
                    equality among all citizens
                  </p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    {jsonData[0].category.map((option) => (
                      <button
                        key={option}
                        onClick={() => setSelectedCategory(option)}
                        className={`px-4 py-2 rounded-full border text-sm ${
                          selectedCategory === option
                            ? "bg-gray-200 font-semibold border-gray-400"
                            : "bg-white text-gray-500 font-semibold border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Differently Abled Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Are you differently abled?
                  </label>
                  <div className="w-1/2 flex flex-1">
                    <div className="w-1/2 flex flex-1 gap-2">
                      <input type="radio" name="differentlyAbled" />
                      <span className="text-sm font-semibold text-gray-700">
                        Yes
                      </span>
                    </div>
                    <div className="w-1/2 flex flex-1 gap-2">
                      <input type="radio" name="differentlyAbled" />
                      <span className="text-sm font-semibold text-gray-700">
                        No
                      </span>
                    </div>
                  </div>
                </div>

                {/* Career Break Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Have you taken any career break?
                  </label>
                  <div className="w-1/2 flex flex-1">
                    <div className="w-1/2 flex flex-1 gap-2">
                      <input type="radio" name="differentlyAbled" />
                      <span className="text-sm font-semibold text-gray-700">
                        Yes
                      </span>
                    </div>
                    <div className="w-1/2 flex flex-1 gap-2">
                      <input type="radio" name="differentlyAbled" />
                      <span className="text-sm font-semibold text-gray-700">
                        No
                      </span>
                    </div>
                  </div>
                </div>

                {/* Work Permit Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Work permit for USA
                  </label>
                  <div className="w-full flex flex-1">
                    <select
                      name="workpermit"
                      className="w-full outline-none border p-2 rounded-xl"
                    >
                      <option value="" className="text-gray-700">
                        Select work permit
                      </option>
                    </select>
                  </div>
                </div>

                {/* Work Permit for USA Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Work permit for other countries
                  </label>
                  <div className="w-full flex flex-1">
                    <select
                      name="workpermit"
                      className="w-full outline-none border p-2 rounded-xl"
                    >
                      <option value="" className="text-gray-700">
                        Select countries
                      </option>
                    </select>
                  </div>
                </div>

                {/* Permanent address Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Permanent address
                  </label>
                  <div className="w-full flex flex-1">
                    <input
                      type="text"
                      name="workpermit"
                      className="w-full outline-none border p-2 rounded-xl text-gray-600"
                      placeholder="Enter permanent address"
                    ></input>
                  </div>
                </div>

                {/* Home Town Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">Hometown</label>
                  <div className="w-full flex flex-1">
                    <input
                      type="text"
                      name="hometown"
                      className="w-full outline-none border p-2 rounded-xl text-gray-600"
                      placeholder="Enter hometown"
                    ></input>
                  </div>
                </div>

                {/* Pincode Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">Pincode</label>
                  <div className="w-full flex flex-1">
                    <input
                      type="number"
                      name="pincode"
                      className="w-full outline-none border p-2 rounded-xl text-gray-600"
                      placeholder="Enter pincode"
                    ></input>
                  </div>
                </div>

                {/* Language Selection */}
                <div className="flex flex-col gap">
                  <label className="text-lg font-semibold">
                    Language Proficiency
                  </label>
                  <p className="mt-1 text-sm text-gray-500 font-medium">
                    Strengthen your resume by letting recruiters know you can
                    communicate in multiple languages
                  </p>

                  <>
                    {sections.map((section) => (
                      <div key={section} className="mt-5 flex flex-col gap-2">
                        {/* Headers for language and proficiency */}
                        <div className="w-full flex gap-2">
                          <label className="w-1/2 text-black font-semibold">
                            Language <span className="text-red-700">*</span>
                          </label>
                          <label className="w-1/2 text-black font-semibold">
                            Proficiency <span className="text-red-700">*</span>
                          </label>
                        </div>

                        {/* Language and proficiency selection */}
                        <div className="w-full flex gap-2">
                          <select
                            name="language"
                            className="w-1/2 outline-none border p-2 rounded-xl text-gray-700 text-sm"
                          >
                            <option value="" className="text-gray-700">
                              Select language
                            </option>
                          </select>

                          <select
                            name="proficiency"
                            className="w-1/2 outline-none border p-2 rounded-xl text-gray-700 text-sm"
                          >
                            <option value="" className="text-gray-700">
                              Proficiency
                            </option>
                            <option value="Expert">Expert</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Proficient">Proficient</option>
                          </select>
                        </div>

                        {/* Checkboxes and Delete option */}
                        <div className="mt-2 flex items-center gap-4 justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`read${section}`}
                              className="w-4 h-4 text-black"
                            />
                            <label
                              htmlFor={`read${section}`}
                              className="text-sm font-medium text-gray-700"
                            >
                              Read
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`write${section}`}
                              className="w-4 h-4 text-black"
                            />
                            <label
                              htmlFor={`write${section}`}
                              className="text-sm font-medium text-gray-700"
                            >
                              Write
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={`speak${section}`}
                              className="w-4 h-4 text-black"
                            />
                            <label
                              htmlFor={`speak${section}`}
                              className="text-sm font-medium text-gray-700"
                            >
                              Speak
                            </label>
                          </div>

                          {/* Delete option */}
                          <button className="text-blue-600 text-sm font-semibold font-medium">
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </>
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
                    setPersonalDetails({
                      ...personalDetailsTemp,
                      gender: selectedGender,
                      maritalStatus: selectedMaritalStatus,
                      category: selectedCategory,
                    });
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
