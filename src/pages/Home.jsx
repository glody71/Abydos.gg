import React from "react";
import Card from "../components/Card";
import Searchbar from "../components/Searchbar";
import { useState } from "react";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="flex items-center justify-center mt-32 h-full">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-white text-3xl font-semibold font">Archive / Students</h1>
        <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Card searchQuery={searchQuery} />
      </div>
    </div>
  );
};

export default Home;
