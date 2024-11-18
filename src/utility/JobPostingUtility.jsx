import { useState } from "react";

function JobPostingUtility() {
  const [isJobPostingOpen, setIsJobPostingOpen] = useState(false);
  const [jobDescription, setJobDescription] = useState("");

  const handleChange = (content) => {
    setJobDescription(content);
  };

  const toggleJobPost = () => {
    setIsJobPostingOpen((prev) => !prev);
  };

  return { isJobPostingOpen, toggleJobPost, jobDescription, handleChange };
}

export default JobPostingUtility;
