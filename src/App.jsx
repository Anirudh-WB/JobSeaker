import ProfilePage from "./components/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/NavBar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App bg-gray-50 h-screen w-screen overflow-auto flex flex-col justify-center items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
