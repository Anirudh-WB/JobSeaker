import ProfilePage from "./components/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Joblist from "./components/JobList/Joblist";

function App() {
  return (
    <div className="App bg-gray-50 h-screen w-screen flex flex-col">
      <Navbar />
      <div className="overflow-auto h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/job-list" element={<Joblist />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
