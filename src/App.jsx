import ProfilePage from "./components/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App bg-gray-50 h-screen w-screen overflow-auto flex flex-col justify-center items-center">
      <HomePage/>
      <ProfilePage />
    </div>
  );
}

export default App;
