import { useState } from "react";

function ProfileHeaderUtility() {
  let [projectHeader, setProjectHeader] = useState([
    {
      id: 1,
      role: "Team Lead",
      lastUpdated: "03 Nov, 2024",
      location: "Mumbai, India",
      exp: 12,
      salary: 2100000,
      contact: 7894561233,
      email: "johndoe@example.com",
      noticePeriod: 1,
    },
  ]);

  const [selectedPeriod, setSelectedPeriod] = useState("");

  return {
    projectHeader,
    setProjectHeader,
    selectedPeriod,
    setSelectedPeriod,
  };
}

export default ProfileHeaderUtility;
