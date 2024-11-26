import { useState } from "react";

function JobPostingUtility() {
  const [jobDescription, setJobDescription] = useState("");

  const handleChange = (content) => {
    setJobDescription(content);
  };

  return { jobDescription, handleChange };
}

export default JobPostingUtility;
