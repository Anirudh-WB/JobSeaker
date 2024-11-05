import React from "react";
import Navbar from "../NavBar/Navbar";
import SearchBar from "./SearchBar";

function HomePage() {
  return (
    <>
      <div class="text-center p-5 mt-10">
        <h1 className="text-black text-3xl font-bold ">
          Find your dream job now
        </h1>
        <p className="p-2">
          More <span className="text-black font-semibold">jobs</span> for you to
          explore
        </p>
      </div>
      <SearchBar />
    </>
  );
}

export default HomePage;
