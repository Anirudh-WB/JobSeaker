import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
  CloseButton,
  Field,
  Label,
  Select,
} from "@headlessui/react";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa6";
import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import ItSkillsUtility from "../../../../utility/ItSkillsUtility";
import CommonUtility from "../../../../utility/CommonUtility";
import { useDispatch, useSelector } from "react-redux";
import { toggleItSkillsModal } from "../../../../redux/modal/modalSlice";

export default function ItSkillsModal({ setSkills, skillToEdit }) {
  useEffect(() => {
    if (skillToEdit) {
      skillsUtility.setSkillsTemp(skillToEdit);
    }
  }, [skillToEdit]);

  const utility = CommonUtility();
  const skillsUtility = ItSkillsUtility();

  const isItSkillsOpen = useSelector(
    (state) => state.modalReducer.jobSeekerProfile.itSkillsModal
  );

  const dispatch = useDispatch();

  return (
    <>
      <Dialog
        open={isItSkillsOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => {
          skillsUtility.setSkillsTemp({
            name: "",
            version: NaN,
            lastUsed: NaN,
            experience: {
              year: 0,
              month: 0,
            },
          });
          dispatch(toggleItSkillsModal());
        }}
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
              <DialogTitle
                as="h3"
                className="text-xl font-medium flex gap-3 items-baseline"
              >
                IT skills <span className="text-green-500 text-sm">Add %</span>
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-500 font-medium">
                Mention skills like programming languages (Java, Python),
                softwares (Microsoft Word, Excel) and more, to show your
                technical expertise.
              </p>
              <div className="my-7 flex flex-col gap-5">
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium">
                    Skill / Software name{" "}
                    <span className="text-red-500">*</span>
                  </h2>
                  <input
                    type="text"
                    value={skillsUtility.skillsTemp.name}
                    onChange={(e) => {
                      skillsUtility.setSkillsTemp((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }));
                    }}
                    className="border outline-none p-3 rounded-2xl m-1 text-sm"
                    placeholder="Skill / Software name"
                  />
                </div>
                <div className="flex">
                  <div className="flex flex-col w-1/2">
                    <h2 className="text-sm font-medium">Software version</h2>
                    <input
                      type="number"
                      value={skillsUtility.skillsTemp.version || ""}
                      onChange={(e) =>
                        skillsUtility.setSkillsTemp((prev) => ({
                          ...prev,
                          version: e.target.value,
                        }))
                      }
                      className="border outline-none p-3 rounded-2xl m-1 text-sm"
                      placeholder="Software version"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <Field>
                      <Label className="text-sm font-medium">Last used</Label>
                      <div className="relative border rounded-2xl flex items-center m-1">
                        <Select
                          className={`w-full border border-none rounded-2xl p-3 text-sm outline-none appearance-none ${
                            !skillsUtility.skillsTemp.lastUsed
                              ? "text-gray-400"
                              : ""
                          }`}
                          onChange={(e) =>
                            skillsUtility.setSkillsTemp((prev) => ({
                              ...prev,
                              lastUsed: e.target.value,
                            }))
                          }
                          value={skillsUtility.skillsTemp.lastUsed || ""}
                        >
                          <option value="" disabled={true} hidden={true}>
                            Last used
                          </option>
                          {utility.years.map((yr, idx) => (
                            <option value={yr} key={idx} className="text-black">
                              {yr}
                            </option>
                          ))}
                        </Select>
                        <FaChevronDown className="text-gray-500 text-xs mr-3" />
                      </div>
                    </Field>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-col w-full">
                    <h2 className="text-sm font-medium">Experience</h2>
                    <div className="flex">
                      <div className="flex flex-col w-1/2">
                        <Field>
                          <div className="relative border rounded-2xl flex items-center m-1">
                            <Select
                              className={`w-full border border-none rounded-2xl p-3 text-sm outline-none appearance-none ${
                                !skillsUtility.skillsTemp.experience.year
                                  ? "text-gray-400"
                                  : ""
                              }`}
                              onChange={(e) =>
                                skillsUtility.setSkillsTemp((prev) => ({
                                  ...prev,
                                  experience: {
                                    ...prev.experience,
                                    year: e.target.value,
                                  },
                                }))
                              }
                              value={
                                skillsUtility.skillsTemp.experience.year || ""
                              }
                            >
                              <option value="" disabled={true} hidden={true}>
                                Years
                              </option>
                              {utility.experience.map((yr, idx) => (
                                <option
                                  value={yr}
                                  key={idx}
                                  className="text-black"
                                >
                                  {yr}
                                </option>
                              ))}
                            </Select>
                            <FaChevronDown className="text-gray-500 text-xs mr-3" />
                          </div>
                        </Field>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <Field>
                          <div className="relative border rounded-2xl flex items-center m-1">
                            <Select
                              className={`w-full border border-none rounded-2xl p-3 text-sm outline-none appearance-none ${
                                !skillsUtility.skillsTemp.experience.month
                                  ? "text-gray-400"
                                  : ""
                              }`}
                              onChange={(e) =>
                                skillsUtility.setSkillsTemp((prev) => ({
                                  ...prev,
                                  experience: {
                                    ...prev.experience,
                                    month: e.target.value,
                                  },
                                }))
                              }
                              value={
                                skillsUtility.skillsTemp.experience.month || ""
                              }
                            >
                              <option value="" disabled={true} hidden={true}>
                                Months
                              </option>
                              {utility.monthsNum.map((month, index) => (
                                <option
                                  value={month}
                                  key={index}
                                  className="text-black"
                                >
                                  {month}
                                </option>
                              ))}
                            </Select>
                            <FaChevronDown className="text-gray-500 text-xs mr-3" />
                          </div>
                        </Field>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-10 font-semibold">
                <button
                  className="text-blue-700"
                  onClick={() => {
                    skillsUtility.setSkillsTemp(skillToEdit);
                    dispatch(toggleItSkillsModal());
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-white bg-blue-600 px-7 py-2 rounded-full"
                  onClick={() => {
                    setSkills((prev) =>
                      skillToEdit.id
                        ? prev.map((skill) =>
                            skill.id === skillToEdit.id
                              ? { ...skill, ...skillsUtility.skillsTemp }
                              : skill
                          )
                        : [
                            {
                              id: skillsUtility.itSkills.length + 1,
                              ...skillsUtility.skillsTemp,
                            },
                            ...prev,
                          ]
                    );
                    skillsUtility.setSkillsTemp({
                      name: "",
                      version: NaN,
                      lastUsed: NaN,
                      experience: {
                        year: 0,
                        month: 0,
                      },
                    });
                    dispatch(toggleItSkillsModal());
                    toast.success("IT Skills saved successfully", {
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
        containerId="it__skills__toast"
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
