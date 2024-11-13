import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  CloseButton,
} from "@headlessui/react";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Bounce, toast, ToastContainer } from "react-toastify";
import KeySkillsUtility from "../../../utility/KeySkillsUtility";

export default function KeySkillsModal({ isOpen, toggleModal, setSkills }) {
  const skillUtility = KeySkillsUtility();

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={toggleModal}
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
                Key skills
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Add skills that best define your expertise, for e.g, Direct
                Marketing, Oracle, Java, etc. (Minimum 1)
              </p>
              <div className="my-7 flex flex-col gap-12">
                <div className="flex flex-col gap-7">
                  <h2 className="text-sm font-medium">Skills</h2>
                  <div className="flex items-center gap-2 flex-wrap text-sm px-4">
                    {skillUtility.skillsTemp?.map((skill, index) => (
                      <span
                        className="rounded-full px-3 py-1 bg-gray-300 border border-black font-medium flex items-end gap-1"
                        key={index}
                      >
                        {skill}

                        <button
                          onClick={() =>
                            skillUtility.setSkillsTemp((prev) =>
                              prev.filter((item) => item !== skill)
                            )
                          }
                        >
                          <IoMdClose className="text-gray-500" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="relative flex flex-col gap-2 text-sm">
                    <div class="relative">
                      <input
                        type="text"
                        id="floating_outlined"
                        class="border border-gray-300 rounded-2xl px-4 py-2 w-full outline-none peer"
                        placeholder=""
                      />
                      <label
                        for="floating_outlined"
                        class="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                      >
                        Add skills
                      </label>
                    </div>

                    {skillUtility.searchTerm &&
                      skillUtility.filteredSuggestions.length > 0 && (
                        <div className="absolute top-full left-0 w-full max-h-60 overflow-y-auto rounded-lg bg-white shadow-lg z-10">
                          {skillUtility.filteredSuggestions.map(
                            (skill, index) => (
                              <div
                                key={index}
                                className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                                onClick={() => {
                                  skillUtility.setSkillsTemp((prev) => [
                                    skill,
                                    ...prev,
                                  ]);
                                  skillUtility.setSuggestedSkills((prev) =>
                                    prev.filter((item) => item !== skill)
                                  );
                                  skillUtility.setSearchTerm("");
                                }}
                              >
                                {skill}
                              </div>
                            )
                          )}
                        </div>
                      )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-sm font-medium">
                    Or you can select from the suggested set of skills
                  </h2>
                  <div className="flex items-center gap-2 flex-wrap text-sm text-gray-700">
                    {skillUtility.suggestedSkills.map((skill, index) => (
                      <span
                        className="border rounded-full px-3 py-1 font-medium flex items-end gap-1"
                        key={index}
                      >
                        {skill}

                        <button
                          onClick={() => {
                            skillUtility.setSkillsTemp((prev) => [
                              skill,
                              ...prev,
                            ]);
                            skillUtility.setSuggestedSkills((prev) =>
                              prev.filter((item) => item !== skill)
                            );
                          }}
                        >
                          <FiPlus className="text-gray-500" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-16 flex justify-end gap-10 font-semibold">
                <button
                  className="text-blue-700"
                  onClick={() => {
                    skillUtility.setSkillsTemp(skillUtility.skills);
                    toggleModal();
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 px-7 py-2 rounded-full"
                  onClick={() => {
                    setSkills(skillUtility.skillsTemp);
                    toggleModal();
                    toast.success("Key Skills saved successfully", {
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
        containerId="key__skills__toast"
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
