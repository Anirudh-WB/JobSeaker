import React from "react"; 
import NavBar from '../NavBar/Navbar'; 
import SingleJobs from "./SingleJobs";
import JobDescription from "./JobDescription";
function JobDetails(){
    return(
        <div>
            <SingleJobs/>
            <JobDescription/>
        </div>
    )
}

export default JobDetails;