import { useState } from "react";

function PersonalDetailsUtility() {
  let [isPersonalDetailsOpen, setIsPersonalDetailsOpen] = useState(false);

  let [personalDetails, setPersonalDetails] = useState({
    gender: "Male",
    marritalStatus: "Married",
    careerBreak: "No",
    dateOfBirth: "1990-01-01",
    category: "General",
    address: "123 Main St, City, State, ZIP",
    differentlyAble: "No",
    languages: [
      {
        name: "Hindi",
        proficiency: "Expert",
        canRead: true,
        canWrite: true,
        canSpeak: true,
      },
      {
        name: "Urdu",
        proficiency: "Expert",
        canRead: true,
        canWrite: true,
        canSpeak: true,
      },
      {
        name: "English",
        proficiency: "Proficient",
        canRead: true,
        canWrite: true,
        canSpeak: true,
      },
    ],
  });

  const toggleModal = () => {
    setIsPersonalDetailsOpen((prev) => !prev);
  };

  const [personalDetailsTemp, setPersonalDetailsTemp] =
    useState(personalDetails);

  return {
    isPersonalDetailsOpen,
    toggleModal,
    personalDetails,
    setPersonalDetails,
    personalDetailsTemp,
    setPersonalDetailsTemp,
  };
}

export default PersonalDetailsUtility;
