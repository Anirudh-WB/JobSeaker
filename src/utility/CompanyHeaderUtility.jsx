import { useState } from "react";

function CompanyHeaderUtility() {
  let [isCompanyHeaderOpen, setIsCompanyHeaderOpen] = useState(false);
  let [companyHeader, setCompanyHeader] = useState({
    companyLogoUrl:
      "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg",
    companyTagLine: "As tech goes we grows",
    companyName: "AsTechGoes",
    contactInfo: {
      companyEmail: "astech@gmail.com",
      companyPhone: "+91 78946 147525",
      companyWebsite: "http://www.tech.com",
      companyAddress: "Mumbai, India",
    },
    lastUpdated: "November 15, 2024",
    contactPerson: {
      name: "John Doe",
      title: "Customer Support Manager",
      email: "john.doe@tech.com",
      phone: "+91 98765 43210",
    },
  });

  const [selectedPeriod, setSelectedPeriod] = useState("");

  const toggleCompanyHeader = () => {
    setIsCompanyHeaderOpen((prev) => !prev);
  };

  return {
    isCompanyHeaderOpen,
    setIsCompanyHeaderOpen,
    companyHeader,
    setCompanyHeader,
    toggleCompanyHeader,
    selectedPeriod,
    setSelectedPeriod,
  };
}

export default CompanyHeaderUtility;
