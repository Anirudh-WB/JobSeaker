import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  CloseButton,
  Field,
  Label,
  Select,
  Checkbox,
} from "@headlessui/react";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import { TfiCheck } from "react-icons/tfi";
import { LiaCheckSolid } from "react-icons/lia";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function CareersModal({
  isOpen,
  setIsOpen,
  careers,
  setCareers,
}) {
  const [careersTemp, setcareersTemp] = useState(careers);

  const [locations, setLocations] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Function to add a new location tag
  const addLocation = (e) => {
    e.preventDefault();
    if (
      inputValue.trim() &&
      locations.length < 10 &&
      !locations.includes(inputValue)
    ) {
      setLocations([...locations, inputValue.trim()]);
      setInputValue(""); // Clear input
    }
  };

  // Function to remove a location tag
  const removeLocation = (locationToRemove) => {
    setLocations(locations.filter((location) => location !== locationToRemove));
  };

  const industries = [
    "IT Services & Consulting",
    "Engineering",
    "Sales",
    "Call Center",
  ];

  const departments = [
    "Enineering - Software & QA",
    "Humar Resources",
    "Accounts",
    "Management",
  ];

  const roleCategories = ["Software Development", "QA"];

  const jobRoles = [
    "Technical Lead",
    "Software Developer",
    "Software Engineer",
    "Senior Software Developer",
    "Senior Software Engineer",
  ];

  const jobTypes = ["Permanent", "Contractual"];

  const employmentTypes = ["Full time", "Part time"];

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
                <CloseButton as="button" className="text-xl text-gray-500">
                  <RiCloseLargeFill />
                </CloseButton>
              </div>
              <DialogTitle as="h3" className="text-xl font-medium">
                Career proflie
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Add details about your current and preferred job profile. This
                helps us personalize your job recommendations
              </p>
              <div>
                <div className="mt-4 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <Field>
                      <Label className="text-sm font-medium">
                        Current Industry <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative border rounded-2xl flex items-center m-1">
                        <Select
                          className={`w-full border border-none rounded-2xl p-3 text-sm outline-none appearance-none ${
                            !careersTemp.currentIndustry ? "text-gray-400" : ""
                          }`}
                          onChange={(e) =>
                            setcareersTemp((prev) => ({
                              ...prev,
                              currentIndustry: e.target.value,
                            }))
                          }
                          value={careersTemp.currentIndustry || ""}
                        >
                          <option value="" disabled={true} hidden={true}>
                            Current Industry
                          </option>
                          {industries.map((industry, idx) => (
                            <option value={industry} key={idx}>
                              {industry}
                            </option>
                          ))}
                        </Select>
                        <FaChevronDown className="text-gray-500 text-xs mr-3" />
                      </div>
                    </Field>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Field>
                      <Label className="text-sm font-medium">
                        Department <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative border rounded-2xl flex items-center m-1">
                        <Select
                          className={`w-full border border-none rounded-2xl p-3 text-sm outline-none appearance-none ${
                            !careersTemp.department ? "text-gray-400" : ""
                          }`}
                          onChange={(e) =>
                            setcareersTemp((prev) => ({
                              ...prev,
                              department: e.target.value,
                            }))
                          }
                          value={careersTemp.department || ""}
                        >
                          <option value="" disabled={true} hidden={true}>
                            Department
                          </option>
                          {departments.map((department, idx) => (
                            <option value={department} key={idx}>
                              {department}
                            </option>
                          ))}
                        </Select>
                        <FaChevronDown className="text-gray-500 text-xs mr-3" />
                      </div>
                    </Field>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Field>
                      <Label className="text-sm font-medium">
                        Role Category <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative border rounded-2xl flex items-center m-1">
                        <Select
                          className={`w-full border border-none rounded-2xl p-3 text-sm outline-none appearance-none ${
                            !careersTemp.roleCategory ? "text-gray-400" : ""
                          }`}
                          onChange={(e) =>
                            setcareersTemp((prev) => ({
                              ...prev,
                              roleCategory: e.target.value,
                            }))
                          }
                          value={careersTemp.roleCategory || ""}
                        >
                          <option value="" disabled={true} hidden={true}>
                            Role Category
                          </option>
                          {roleCategories.map((category, idx) => (
                            <option value={category} key={idx}>
                              {category}
                            </option>
                          ))}
                        </Select>
                        <FaChevronDown className="text-gray-500 text-xs mr-3" />
                      </div>
                    </Field>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Field>
                      <Label className="text-sm font-medium">
                        Job Role <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative border rounded-2xl flex items-center m-1">
                        <Select
                          className={`w-full border border-none rounded-2xl p-3 text-sm outline-none appearance-none ${
                            !careersTemp.jobRole ? "text-gray-400" : ""
                          }`}
                          onChange={(e) =>
                            setcareersTemp((prev) => ({
                              ...prev,
                              jobRole: e.target.value,
                            }))
                          }
                          value={careersTemp.jobRole || ""}
                        >
                          <option value="" disabled={true} hidden={true}>
                            Job Role
                          </option>
                          {jobRoles.map((role, idx) => (
                            <option value={role} key={idx}>
                              {role}
                            </option>
                          ))}
                        </Select>
                        <FaChevronDown className="text-gray-500 text-xs mr-3" />
                      </div>
                    </Field>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm text-black font-semibold">
                      Desired job type
                    </h3>
                    <div className="flex items-center gap-6">
                      {jobTypes.map((type, idx) => (
                        <Field className="flex items-center gap-3 w-1/3">
                          <Checkbox
                            value={type}
                            key={idx}
                            // checked={enabled}
                            // onChange={setEnabled}
                            className="rounded size-[1.2rem] border bg-white data-[checked]:bg-black flex items-center justify-center"
                          >
                            <IoCheckmarkSharp className="text-white" />
                          </Checkbox>
                          <Label>{type}</Label>
                        </Field>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm text-black font-semibold">
                      Desired employeement type
                    </h3>
                    <div className="flex items-center gap-6">
                      {employmentTypes.map((type, idx) => (
                        <Field className="flex items-center gap-3 w-1/3">
                          <Checkbox
                            value={type}
                            key={idx}
                            // checked={enabled}
                            // onChange={setEnabled}
                            className="rounded size-[1.2rem] border bg-white data-[checked]:bg-black flex items-center justify-center"
                          >
                            <IoCheckmarkSharp className="text-white" />
                          </Checkbox>
                          <Label>{type}</Label>
                        </Field>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-black font-semibold">
                      Preferred shift
                    </label>
                    <div className="flex items-center gap-4 w-1/2 justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-black"
                          name="shift"
                          value="Morning"
                        />
                        <span className="text-gray-900 text-md">Morning</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-black"
                          name="shift"
                          value="night"
                        />
                        <span className="text-gray-900 text-md">Night</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          className="form-radio h-4 w-4 text-black"
                          name="shift"
                          value="flexible"
                        />
                        <span className="text-gray-900 text-md">Flexible</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-black font-semibold">
                      Preferred work location (Max 10)
                    </label>

                    <div class="relative">
                      <input
                        type="text"
                        id="floating_outlined"
                        className="w-full outline-none border rounded-md p-2 peer"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && addLocation(e)}
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Preferred location
                      </label>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {locations.map((location, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 p-2 bg-gray-200 rounded-full text-sm border border-black text-black font-semibold"
                        >
                          <span>{location}</span>
                          <button
                            onClick={() => removeLocation(location)}
                            className="text-gray-500 hover:text-black"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-black font-semibold">
                      Expected Salary
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
                        Expected Salary
                      </label>
                    </div>
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
                    toast.success("Careers saved successfully", {
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
