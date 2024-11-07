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
                  <input
                    type="text"
                    className="outline-none border rounded-md p-2"
                  />

                  <label className="font-semibold text-sm">
                    Client <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    className="outline-none border rounded-md p-2"
                  />

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
                    <select
                      className="w-1/2 outline-none border p-2 rounded-lg text-gray-500"
                      name="year"
                    >
                      <option value="">Select Year</option>
                    </select>
                    <select
                      className="w-1/2 outline-none border p-2 rounded-lg text-gray-500"
                      name="month"
                    >
                      <option value="">Select Month</option>
                    </select>
                  </div>
                  <label className="font-semibold text-sm">
                    Details of projects <span className="text-red-600">*</span>
                  </label>
                  <div>
                    <textarea
                      className="border w-full outline-none rounded-xl resize-none text-sm p-2"
                      rows={3}
                      placeholder="Type here..."
                    />
                    <span className="text-xs text-gray-600 text-right py-2 w-full block">
                      1000 character(s) left
                    </span>
                  </div>

                  <a href="/" className="text-blue-700 font-semibold text-sm
                  ">
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
