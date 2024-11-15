import React from "react";
import Joblist from "../../JobList/Joblist";
import CompanyJobInfo from "./CompanyJobInfo";

function CompanyJobs() {
  return (
    <>
      <div className="flex gap-10 w-full">
        <CompanyJobInfo />
        <Joblist />
      </div>
    </>
  );
}

export default CompanyJobs;
