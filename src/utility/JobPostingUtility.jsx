import Quill from "quill";
import { useEffect, useRef, useState } from "react";


function JobPostingUtility() {
  const [isJobPostingOpen, setIsJobPostingOpen] = useState(false);
  const [content, setContent] = useState("");


  const toggleJobPost = () => {
    setIsJobPostingOpen((prev) => !prev);
  };

  return { isJobPostingOpen, toggleJobPost, content, setContent };
}

export default JobPostingUtility;
