import { useState } from "react";

function PersonalDetailsUtility() {
  let [personalDetails, setPersonalDetails] = useState({
    gender: "Male",
    marritalStatus: "Married",
    careerBreak: "No",
    dateOfBirth: "1990-01-01",
    workPermit: "",
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

  const [personalDetailsTemp, setPersonalDetailsTemp] =
    useState(personalDetails);

  return {
    personalDetails,
    setPersonalDetails,
    personalDetailsTemp,
    setPersonalDetailsTemp,
  };
}

export default PersonalDetailsUtility;
