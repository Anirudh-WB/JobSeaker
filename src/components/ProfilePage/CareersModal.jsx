import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

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
                Careers
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Add details about your current and preferred job profile. This
                helps us personalize your job recommendations
              </p>
              <div>
                <div className="mt-4 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-black font-semibold">
                      Current Industry <span className="text-red-600">*</span>
                    </label>
                    <select className="p-2 text-black outline-none rounded-xl border "></select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-black font-semibold">
                      Department <span className="text-red-600">*</span>
                    </label>
                    <select className="p-2 text-black outline-none rounded-xl border "></select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-black font-semibold">
                      Role Category <span className="text-red-600">*</span>
                    </label>
                    <select className="p-2 text-black outline-none rounded-xl border "></select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-black font-semibold">
                      Job Role <span className="text-red-600">*</span>
                    </label>
                    <select className="p-2 text-black outline-none rounded-xl border "></select>
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <span className="text-sm text-black font-semibold">
                      Desired Job Type
                    </span>
                    <div className="flex items-center gap-10 justify-between">
                      <div className="flex items-center gap-2 w-1/2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-black"
                          value="permanent"
                        />
                        <span className="text-gray-900 text-md">Permanent</span>
                      </div>

                      <div className="flex items-center gap-2 w-1/2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-black"
                          value="contractual"
                        />
                        <span className="text-gray-900 text-md">
                          Contractual
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-1/2">
                    <span className="text-sm text-black font-semibold">
                      Desired employeement Type
                    </span>
                    <div className="flex items-center gap-10 justify-between">
                      <div className="flex items-center gap-2 w-1/2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-black"
                          value="Full-Time"
                        />
                        <span className="text-gray-900 text-md">Full-Time</span>
                      </div>

                      <div className="flex items-center gap-2 w-1/2">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-black"
                          value="Part-Time"
                        />
                        <span className="text-gray-900 text-md">Part-Time</span>
                      </div>
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
                    <input
                      type="text"
                      className="p-2 text-black outline-none rounded-xl border text-md"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addLocation(e)}
                      placeholder="Tell us your location preferences to work"
                    />

                    <div className="flex flex-wrap gap-2 mt-2">
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
                    <input
                      type="number"
                      className="p-2 text-black outline-none rounded-xl border text-md"
                    />
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
