import React from "react";
import Header from "../components/Header";
import Recommended from "../components/home/Recommended";
import Category from "../components/home/Category";
import ForYou from "../components/home/ForYou";


const Home = () => {
  return (
    <div className="bg-[#A27B5C]">
      <Header />
      <Recommended />
      <Category />
      <ForYou />
    
    </div>
  );
};

export default Home;
