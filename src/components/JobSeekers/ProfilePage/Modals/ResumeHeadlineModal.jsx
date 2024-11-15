import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  CloseButton,
} from "@headlessui/react";
import { RiCloseLargeFill } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from "react-toastify";
import ResumeHeadlineUtility from "../../../../utility/ResumeHeadlineUtility";

export default function ResumeHeadlineModal({
  isOpen,
  toggleModal,
  setResumeHeadline,
}) {
  const utility = ResumeHeadlineUtility();

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={toggleModal}
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
                Resume headline
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                It is the first thing recruiters in your profile. Write a
                concise headline introducing yourself to employers. (Minimum 5
                words)
              </p>
              <div className="my-6">
                <textarea
                  className="border w-full outline-none py-3 px-4 rounded-xl resize-none"
                  rows={3}
                  value={utility.headlineTemp}
                  onChange={(e) => utility.setHeadlineTemp(e.target.value)}
                />
                <span className="text-xs text-gray-600 text-right py-2 w-full block">
                  91 character(s) left
                </span>
              </div>
              <div className="mt-4 flex justify-end gap-10 font-semibold">
                <button className="text-blue-700" onClick={toggleModal}>
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 px-7 py-2 rounded-full"
                  onClick={() => {
                    setResumeHeadline(utility.headlineTemp);
                    toggleModal();
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