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
    addToArray,
    removeFromArray,
  };
}

export default CommonUtility;
