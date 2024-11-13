import { useState } from "react";
import CommonUtility from "./CommonUtility";

function CareerUtility() {
  let [isCareersOpen, setIsCareersOpen] = useState(false);

  const [locations, setLocations] = useState([]);

  const [inputValue, setInputValue] = useState("");

  let [careers, setCareers] = useState({
    currentIndustry: "IT Services & Consulting",
    department: "Engineering - Software & QA",
    roleCategory: "Software Development",
    jobRole: "Software Engineer",
    desiredJobTypes: ["permanent", "contractual"],
    employeeType: ["full-time", "part-time"],
    shift: "flexible",
    location: ["Mumbai", "Thane", "Navi Mumbai"],
    salary: 2500000,
  });

  const [careersTemp, setCareersTemp] = useState({
    currentIndustry: "",
    department: "",
    roleCategory: "",
    jobRole: "",
    desiredJobTypes: [""],
    employeeType: [""],
    shift: "",
    location: [""],
    salary: 0,
  });

  const toggleModal = () => {
    setIsCareersOpen((prev) => !prev);
  };

  const addLocation = (e) => {
    e.preventDefault();
    if (
      inputValue.trim() &&
      locations.length < 10 &&
      !locations.includes(inputValue)
    ) {
      utility.addToArray(inputValue, locations, setLocations);
      setInputValue("");
    }
  };

  const removeLocation = (location) => {
    utility.removeFromArray(location, locations, setLocations);
  };

  const utility = CommonUtility();

  return {
    isCareersOpen,
    toggleModal,
    careersTemp,
    setCareersTemp,
    locations,
    setLocations,
    inputValue,
    setInputValue,
    careers,
    setCareers,
    addLocation,
    removeLocation,
  };
}

export default CareerUtility;
