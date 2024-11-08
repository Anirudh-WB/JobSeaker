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
import { useEffect, useState } from "react";

export default function ItSkillsModal({
  isOpen,
  setIsOpen,
  skills,
  setSkills,
  skillToEdit,
}) {
  const [skillsTemp, setSkillsTemp] = useState(
    skillToEdit || {
      name: "",
      version: NaN,
      lastUsed: NaN,
      experience: {
        year: 0,
        month: 0,
      },
    }
  );

  useEffect(() => {
    if (skillToEdit) {
      setSkillsTemp(skillToEdit);
    }
  }, [skillToEdit]);

  const d = new Date();

  const lastUse = [...Array(d.getFullYear()).keys()].map((n) => n + 1);

  const months = [...Array(11).keys()].map((n) => n + 1);

  const exp = [...Array(100).keys()].map((n) => n + 1);

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => {
          setSkillsTemp({
            name: "",
            version: NaN,
            lastUsed: NaN,
            experience: {
              year: 0,
              month: 0,
            },
          });
          setIsOpen((prev) => !prev);
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
                    value={skillsTemp.name}
                    onChange={(e) => {
                      setSkillsTemp((prev) => ({
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
                      value={skillsTemp.version}
                      onChange={(e) =>
                        setSkillsTemp((prev) => ({
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
                            !skillsTemp.lastUsed ? "text-gray-400" : ""
                          }`}
                          onChange={(e) =>
                            setSkillsTemp((prev) => ({
                              ...prev,
                              lastUsed: e.target.value,
                            }))
                          }
                        >
                          <option
                            value=""
                            selected={true}
                            disabled={true}
                            hidden={true}
                          >
                            Last used
                          </option>
                          {lastUse.map((yr) => (
                            <option
                              value={yr}
                              selected={skillsTemp.lastUsed === yr}
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
                                !skillsTemp.experience.year
                                  ? "text-gray-400"
                                  : ""
                              }`}
                              onChange={(e) =>
                                setSkillsTemp((prev) => ({
                                  ...prev,
                                  experience: {
                                    ...prev.experience,
                                    year: e.target.value,
                                  },
                                }))
                              }
                            >
                              <option
                                value=""
                                selected={true}
                                disabled={true}
                                hidden={true}
                              >
                                Years
                              </option>
                              {exp.map((yr) => (
                                <option
                                  value={yr}
                                  selected={skillsTemp.experience.year === yr}
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
                                !skillsTemp.experience.month
                                  ? "text-gray-400"
                                  : ""
                              }`}
                              onChange={(e) =>
                                setSkillsTemp((prev) => ({
                                  ...prev,
                                  experience: {
                                    ...prev.experience,
                                    month: e.target.value,
                                  },
                                }))
                              }
                            >
                              <option
                                value=""
                                selected={true}
                                disabled={true}
                                hidden={true}
                              >
                                Months
                              </option>
                              {months.map((month) => (
                                <option
                                  value={month}
                                  selected={
                                    skillsTemp.experience.month === month ||
                                    d.getFullYear() === month
                                  }
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
                    setSkillsTemp(skillToEdit);
                    setIsOpen((prev) => !prev);
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
                              ? { ...skill, ...skillsTemp }
                              : skill
                          )
                        : [{ id: skills.length + 1, ...skillsTemp }, ...prev]
                    );
                    setSkillsTemp({
                      name: "",
                      version: NaN,
                      lastUsed: NaN,
                      experience: {
                        year: 0,
                        month: 0,
                      },
                    });
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
