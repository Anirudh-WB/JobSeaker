function CommonUtility() {

  const login = ["JobSeekers", "Company"]

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

  const getEducation = ["Bachelor's Degree", "Master's Degree", "PhD"];

  const getCourse = [
    "Computer Science",
    "AI-DS",
    "Information Engineering",
    "Electronic Engineering",
    "Bio Engineering",
  ];

  const getSpecializations = [
    "Software Engineering",
    "Network Engineering",
    "Structural Engineering",
  ];

  const getGrade = ["A", "B", "C", "D", "E", "F"];

  const getCourseTypes = [
    { value: "full-time", label: "Full-time" },
    { value: "part-time", label: "Part-time" },
    {
      value: "correspondence/Distance learning",
      label: "Correspondence/Distance learning",
    },
  ];

  const salaryBreakdown = [
    100000, 200000, 300000, 400000, 500000, 600000, 700000,
  ];

  const noticePeriod = [
    "15 Days or less",
    "1 Month",
    "2 Months",
    "3 Months",
    "More than 3 Months",
    "Serving Notice Period",
  ];

  const noticePeriodNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

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
    login,
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
    salaryBreakdown,
    noticePeriod,
    noticePeriodNumber,
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
