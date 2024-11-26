import React from "react";
import Joblist from "../../JobList/Joblist";
import CompanyJobInfo from "./CompanyJobInfo";
import { useSelector } from "react-redux";

function CompanyJobs() {
  const hasAccess = useSelector((state) => state.otherReducer.canAccessCompany);

  return (
    <>
      <div className="flex gap-10 w-full">
        {hasAccess && <CompanyJobInfo />}
        <Joblist />
      </div>
    </>
  );
}

export default CompanyJobs;
