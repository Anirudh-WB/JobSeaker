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

  const addToArray = (toAdd, state, setState) => {
    setState([...state, toAdd]);
  };

  const removeFromArray = (toRemove, state, setState) => {
    setState(state.filter((st) => st !== toRemove));
  };

  const d = new Date();

  const years = [...Array(d.getFullYear()).keys()].map((n) => n + 1).reverse();

  const monthsNum = [...Array(11).keys()].map((n) => n + 1);

  const experience = [...Array(100).keys()].map((n) => n + 1);

  const genders = ["Male", "Female", "Transgender"];

  const maritialStatuses = [
    "Single/unmarried",
    "Married",
    "Widowed",
    "Divorced",
    "Separated",
    "Other",
  ];

  const categories = [
    "General",
    "Scheduled Caste (SC)",
    "Scheduled Tribes (ST)",
    "OBC",
    "Other",
  ];

  return {
    industries,
    departments,
    roleCategories,
    jobRoles,
    jobTypes,
    employmentTypes,
    addToArray,
    removeFromArray,
    years,
    monthsNum,
    experience,
    genders,
    maritialStatuses,
    categories,
  };
}

export default CommonUtility;
