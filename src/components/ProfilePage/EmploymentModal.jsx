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

export default function EmploymentModal({
  isOpen,
  setIsOpen,
  employment,
  setEmployment,
}) {
  const [headlineTemp, setHeadlineTemp] = useState(employment);

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
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
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
                Employment
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Details like job title, company name, etc, help employers
                understand your work
              </p>
              <div className="my-6 flex flex-col gap-7">
                <div>
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
                <div>
                  <h3 className="font-medium">Employment type</h3>
                  <div className="flex w-2/3 items-center">
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
                <div>
                  <h3 className="font-medium">
                    Total experience <span className="text-red-500">*</span>
                  </h3>
                  <div className="w-full">
                    <select name="" id="" className="w-1/2"></select>
                    <select name="" id="" className="w-1/2"></select>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">
                    Current company name <span className="text-red-500">*</span>
                  </h3>
                  <input type="text" name="" id="" />
                </div>
                <div>
                  <h3 className="font-medium">
                    Current job title <span className="text-red-500">*</span>
                  </h3>
                  <input type="text" name="" id="" />
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
                    setEmployment(headlineTemp);
                    setIsOpen((prev) => !prev);
                    toast.success("Resume Headline saved successfully", {
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
