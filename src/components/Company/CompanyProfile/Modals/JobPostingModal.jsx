import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { RiCloseLargeFill } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from "react-toastify";
import CommonUtility from "../../../../utility/CommonUtility";
import { Editor } from "react-draft-wysiwyg";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddJobModal } from "../../../../redux/modal/modalSlice";

export default function JobPostingModal() {
  const commonUtility = CommonUtility();

  const dispatch = useDispatch();

  const isAddJobOpen = useSelector(
    (state) => state.modalReducer.companyProfile.addJobModal
  );

  return (
    <>
      <Dialog
        open={isAddJobOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => dispatch(toggleAddJobModal())}
        __demoMode
      >
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-1/2 rounded-3xl bg-white p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className="flex justify-end w-full h-fit">
                <button
                  className="text-xl text-gray-500"
                  onClick={() => dispatch(toggleAddJobModal())}
                >
                  <RiCloseLargeFill />
                </button>
              </div>
              <DialogTitle as="h3" className="text-xl font-medium">
                Post a Jobs
              </DialogTitle>

              <div className="mt-4 flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold">
                    Job Title <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Job Title
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold">
                    Employment type <span className="text-red-600">*</span>
                  </label>
                  <div className="w-full flex gap-3">
                    <div className="relative w-full">
                      <select className="peer outline-none border p-2 w-full rounded-md text-gray-700">
                        {commonUtility.employmentTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Employment type
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold">
                    Add Skills <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Add skill
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold">
                    Experience <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="floating_outlined"
                      className="w-full outline-none border rounded-md p-2 peer"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                      Experience
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold">
                    Salary <span className="text-red-600">*</span>
                  </label>
                  <div className="flex flex-1 gap-2 items-center">
                    <div className="relative w-1/2">
                      <input
                        type="number"
                        id="floating_outlined"
                        className="w-full outline-none border rounded-md p-2 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Minimum Salary
                      </label>
                    </div>
                    <span className="text-gray-700 font-semibold text-sm">to</span>
                    <div className="relative w-1/2">
                      <input
                        type="number"
                        id="floating_outlined"
                        className="w-full outline-none border rounded-md p-2 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_outlined"
                        className="absolute left-2 text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Maximum Salary
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-base font-semibold">
                    Location <span className="text-red-600">*</span>
                  </label>
                  <div className="flex flex-1 gap-2">
                    <div className="relative w-1/3">
                      <select className="peer outline-none border p-2 w-full rounded-md text-gray-700"></select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        Country
                      </label>
                    </div>
                    <div className="relative w-1/3">
                      <select className="peer outline-none border p-2 w-full rounded-md text-gray-700"></select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        State
                      </label>
                    </div>
                    <div className="relative w-1/3">
                      <select className="peer outline-none border p-2 w-full rounded-md text-gray-700"></select>
                      <label className="absolute left-0 top-2 text-sm text-gray-400 bg-white px-2 transition-all duration-300 transform -translate-y-4 scale-75 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
                        City
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 h-52">
                    <label className="text-base font-semibold text-gray-700">
                      Job Description <span className="text-red-600">*</span>
                    </label>
                    <Editor
                      editorClassName="border p-2"
                      wrapperClassName="h-20"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-end gap-10 font-semibold">
                <button
                  className="text-blue-700"
                  onClick={() => dispatch(toggleAddJobModal())}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 px-7 py-2 rounded-full"
                  onClick={() => {
                    dispatch(toggleAddJobModal());
                    toast.success("Job post added successfully", {
                      toastId: "job__posting__toast",
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
                  Post
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>

        <ToastContainer
          containerId="job__posting__toast"
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
      </Dialog>
    </>
  );
}
