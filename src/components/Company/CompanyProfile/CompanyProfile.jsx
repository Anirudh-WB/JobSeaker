import React from "react";
import CompanyHeader from "./CompanyHeader";
import CompanyJobs from "./CompanyJobs";

function CompanyProfile() {
  return (
    <div className="py-8 px-44 w-full h-full overflow-auto flex flex-col gap-5">
      <CompanyHeader />
      <CompanyJobs />
    </div>
  );
}

export default CompanyProfile;
