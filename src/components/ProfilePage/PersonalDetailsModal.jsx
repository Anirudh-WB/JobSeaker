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
                    <div className="relative w-1/3">
                      <select className="peer outline-none border w-full p-2 rounded-xl text-gray-700">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Day
                      </label>
                    </div>

                    <div className="relative w-1/3">
                      <select className="peer outline-none border w-full p-2 rounded-xl text-gray-700">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Month
                      </label>
                    </div>

                    <div className="relative w-1/3">
                      <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700">
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Year
                      </label>
                    </div>
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
                  <div className="relative">
                    <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700">
                      <option value="US">US</option>
                      <option value="Canada">Canada</option>
                      <option value="Other">Other</option>
                    </select>
                    <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Select work permit
                    </label>
                  </div>
                </div>

                {/* Work Permit for USA Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Work permit for other countries
                  </label>
                  <div className="relative">
                    <select className="peer outline-none border p-2 w-full rounded-xl text-gray-700">
                      <option value="US">US</option>
                      <option value="Canada">Canada</option>
                      <option value="Other">Other</option>
                    </select>
                    <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Select Countries
                    </label>
                  </div>
                </div>

                {/* Permanent address Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Permanent address
                  </label>
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
                      Address
                    </label>
                  </div>
                </div>

                {/* Home Town Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">Hometown</label>
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
                      Hometown
                    </label>
                  </div>
                </div>

                {/* Pincode Selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">Pincode</label>
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
                      Pincode
                    </label>
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
                          <div className="relative w-1/2">
                            <select className="peer outline-none border p-2 w-full text-sm rounded-xl text-gray-700">
                              <option value="English">English</option>
                              <option value="Hindi">Hindi</option>
                              <option value="Spanish">Spanish</option>
                              <option value="French">French</option>
                              <option value="German">German</option>
                              <option value="Other">Other</option>
                            </select>
                            <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                              Language
                            </label>
                          </div>

                          <div className="relative w-1/2">
                            <select className="peer outline-none border p-2 w-full text-sm rounded-xl text-gray-700">
                              <option value="Expert">Expert</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Proficient">Proficient</option>
                            </select>
                            <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                              Proficiency
                            </label>
                          </div>
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
