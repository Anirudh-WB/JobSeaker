import React, { useState } from "react";

function JobPostingUtility() {
  let [isJobPostingOpen, setIsJobPostingOpen] = useState(false);
  const toggleJobPost = () => {
    setIsJobPostingOpen((prev) => !prev);
  };
  return {
    isJobPostingOpen,
    toggleJobPost,
  };
}

export default JobPostingUtility;
