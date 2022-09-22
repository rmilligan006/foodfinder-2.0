import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { motion } from "framer-motion";
import { AiOutlineHome } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import { MdLocalDrink } from "react-icons/md";
import Splash from "./components/Splash";
import Search from "./components/home/Search";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full bg-[#647E68] fixed bottom-0 py-1 flex justify-evenly items-baseline"
      >
        <Link to="/home">
          <div className="mx-4 cursor-pointer hover:ease-in-out hover:text-[#DCD7C9] duration-300">
            <AiOutlineHome size={20} />
            <h1 className="">Home</h1>
          </div>
        </Link>
        <Link to="/search">
          <div className="text-center mx-4 cursor-pointer hover:ease-in-out hover:text-[#DCD7C9] duration-300">
            <TbSearch size={20} />
            <h1 className="">Search</h1>
          </div>
        </Link>
        <Link to="/Drinks">
          <div className="text-center mx-4 cursor-pointer hover:ease-in-out hover:text-[#DCD7C9] duration-300">
            <MdLocalDrink size={20} />
            <h1 className="">Drinks</h1>
          </div>
        </Link>
      </motion.div>
    </Router>
  );
};

export default Navigation;
