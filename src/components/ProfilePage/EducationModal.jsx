import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  CloseButton,
} from "@headlessui/react";
import { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function EducationModal({
  isOpen,
  setIsOpen,
  education,
  setEducation,
}) {
  const [educationTemp, setEducationTemp] = useState(education);

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
                Education
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Details like course, university, and more, help recruiters
                identify your educational background
              </p>

              <div className="mt-4 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Education <span className="text-red-600 ">*</span>
                  </label>
                  <div className="relative mt-1">
                    <select className="peer outline-none border p-2 w-full rounded-md  text-sm text-gray-700">
                      <option value="Bachelor's Degree">
                        Bachelor's Degree
                      </option>
                      <option value="Master's Degree">Master's Degree</option>
                      <option value="PhD">PhD</option>
                    </select>
                    <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Select Education
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    University/Institute{" "}
                    <span className="text-red-600 ">*</span>
                  </label>
                  <div class="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer text-sm text-gray-700"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Select University/Institute
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Course <span className="text-red-600 ">*</span>
                  </label>
                  <div className="relative mt-1">
                    <select className="peer outline-none border p-2 w-full rounded-md  text-sm text-gray-700">
                      <option value="computer-science">Computer Science</option>
                      <option value="electrical-engineering">
                        Electrical Engineering
                      </option>
                      <option value="mechanical-engineering">
                        Mechanical Engineering
                      </option>
                      <option value="civil-engineering">
                        Civil Engineering
                      </option>
                      <option value="chemical-engineering">
                        Chemical Engineering
                      </option>
                      <option value="biomedical-engineering">
                        Biomedical Engineering
                      </option>
                    </select>
                    <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Select Course
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Specialiaztion <span className="text-red-600 ">*</span>
                  </label>
                  <div className="relative mt-1">
                    <select className="peer outline-none border p-2 w-full rounded-md text-sm text-gray-700">
                      <option value="software-engineering">
                        Software Engineering
                      </option>
                      <option value="data-science">Data Science</option>
                      <option value="network-engineering">
                        Network Engineering
                      </option>
                      <option value="robotics">Robotics</option>
                      <option value="structural-engineering">
                        Structural Engineering
                      </option>
                      <option value="control-systems">Control Systems</option>
                      <option value="biomedical-engineering">
                        Biomedical Engineering
                      </option>
                    </select>
                    <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Select Specialization
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base text-black font-semibold">
                    Course type <span className="text-red-600">*</span>
                  </label>
                  <div className="flex items-center gap-4 w-4/5 justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-black"
                        name="shift"
                        value="full-time"
                      />
                      <span className="text-gray-700 text-sm">Full-time</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-black"
                        name="shift"
                        value="part-time"
                      />
                      <span className="text-gray-700 text-sm">Part-time</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        className="form-radio h-4 w-4 text-black"
                        name="shift"
                        value="correspondence/Distance learning"
                      />
                      <span className="text-gray-700 text-sm">
                        Correspondence/Distance learning
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Course duration <span className="text-red-600">*</span>
                  </label>
                  <div className="w-full flex flex-1 items-center gap-2">
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
                        Start year
                      </label>
                    </div>
                    <span className="font-semibold text-base text-gray-700">
                        To
                    </span>

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
                        End year
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base font-semibold">
                    Grading system
                  </label>
                  <div className="relative mt-1">
                    <select className="peer outline-none border p-2 w-full rounded-md text-sm text-gray-700">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>

                    </select>
                    <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                      Select Grades
                    </label>
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
                    setEducation(educationTemp);
                    setIsOpen((prev) => !prev);
                    toast.success("Education saved successfully", {
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
