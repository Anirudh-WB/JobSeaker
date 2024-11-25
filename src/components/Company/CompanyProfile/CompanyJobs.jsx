import React from "react";
import Joblist from "../../JobList/Joblist";
import CompanyJobInfo from "./CompanyJobInfo";
import CompanyProfileUtility from "../../../utility/CompanyProfileUtility";

function CompanyJobs() {
  const companyProfileUtility = CompanyProfileUtility();

  return (
    <>
      <div className="flex gap-10 w-full">
        {companyProfileUtility.canAccess && <CompanyJobInfo />}
        <Joblist />
      </div>
    </>
  );
}

export default CompanyJobs;
