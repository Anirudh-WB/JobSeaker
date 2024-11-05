import HomePage from "./components/HomePage/HomePage";
import Joblist from "./components/JobList/Joblist";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Joblist/>
    </div>
  );
}

export default App;
