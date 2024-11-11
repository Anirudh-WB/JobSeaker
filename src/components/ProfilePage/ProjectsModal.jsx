import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

export default function ProjectsModal({
  isOpen,
  setIsOpen,
  projectHeadline,
  setprojectHeadline,
}) {
  const [projectTemp, setprojectTemp] = useState(projectHeadline);

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
                Projects
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Stand out for employers by adding details about project you have
                done in colleges, internship, ot at work places.
              </p>

              <div className="mt-5">
                <form className="w-full flex flex-col gap-3">
                  <label className="font-semibold text-sm">
                    Project title <span className="text-red-600">*</span>
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
                      Project Title
                    </label>
                  </div>

                  <label className="font-semibold text-sm">
                    Client <span className="text-red-600">*</span>
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
                      Client
                    </label>
                  </div>

                  <label className="font-semibold text-sm">
                    Project Status
                  </label>
                  <div class="inline-flex items-center gap-20">
                    <label class="flex items-center text-sm text-gray-700">
                      <input
                        type="radio"
                        name="status"
                        value="ongoing"
                        className="mr-1"
                      />
                      In Progress
                    </label>
                    <label class="flex items-center text-sm text-gray-700">
                      <input
                        type="radio"
                        name="status"
                        value="completed"
                        className="mr-1"
                      />
                      Finished
                    </label>
                  </div>

                  <label className="     font-semibold text-sm">
                    Worked from <span className="text-red-600">*</span>
                  </label>
                  <div className="w-full flex gap-3">
                    <div className="relative w-1/2">
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
                    <div className="relative w-1/2">
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
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Month
                      </label>
                    </div>
                  </div>
                  <label className="font-semibold text-sm">
                    Details of projects <span className="text-red-600">*</span>
                  </label>
                  <div>
                    <div class="relative">
                      <textarea
                        type="text"
                        id="floating_outlined"
                        className="w-full outline-none border rounded-md p-2 peer resize-none"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] bg-white px-2 mb-4 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Description
                      </label>
                    </div>
                    <span className="text-xs text-gray-600 text-right py-2 w-full block">
                      1000 character(s) left
                    </span>
                  </div>

                  <a
                    href="/"
                    className="text-blue-700 font-semibold text-sm
                  "
                  >
                    Add more details
                  </a>
                </form>
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
