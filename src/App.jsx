import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Joblist from "./components/JobList/Joblist";
import JobDetails from "./components/JobDetails/JobDetails";
import ProfilePage from "./components/JobSeekers/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage/HomePage";
import LoginSidebar from "./components/SideBar/LoginSideBar";
import Regsiter from "./components/Register/Regsiter";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App bg-gray-50 h-screen w-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <LoginSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="overflow-auto h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/job-list" element={<Joblist />} />
          <Route path="/job-details" element={<JobDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
