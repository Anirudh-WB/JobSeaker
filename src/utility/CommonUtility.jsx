function CommonUtility() {
  const industries = [
    "IT Services & Consulting",
    "Engineering",
    "Sales",
    "Call Center",
  ];

  const departments = [
    "Enineering - Software & QA",
    "Humar Resources",
    "Accounts",
    "Management",
  ];

  const roleCategories = ["Software Development", "QA"];

  const jobRoles = [
    "Technical Lead",
    "Software Developer",
    "Software Engineer",
    "Senior Software Developer",
    "Senior Software Engineer",
  ];

  const jobTypes = ["Permanent", "Contractual"];

  const employmentTypes = ["Full time", "Part time"];

  const yearOptions = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );

  const monthOptions = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getEducation = ["Bachelor's Degree", "Master's Degree", "PhD"]

  const getCourse = ["Computer Science","AI-DS", "Information Engineering", "Electronic Engineering", "Bio Engineering"]

  const getSpecializations = ["Software Engineering","Network Engineering","Structural Engineering"]

  const getGrade = ["A", "B", "C",  "D", "E", "F"]

  const getCourseTypes = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    { value: "correspondence/Distance learning", label: "Correspondence/Distance learning" },
  ];

  const getProjectStatusOptions = [
    { label: "In Progress", value: "ongoing" },
    { label: "Finished", value: "completed" },
  ];

  const addToArray = (toAdd, state, setState) => {
    setState([...state, toAdd]);
  };

  const removeFromArray = (toRemove, state, setState) => {
    setState(state.filter((st) => st !== toRemove));
  };

  return {
    industries,
    departments,
    roleCategories,
    jobRoles,
    jobTypes,
    employmentTypes,
    yearOptions,
    monthOptions,
    getProjectStatusOptions,
    getEducation,
    getCourse,
    getSpecializations,
    getGrade,
    getCourseTypes,
    addToArray,
    removeFromArray,
  };
}

export default CommonUtility;
