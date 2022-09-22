import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../images/Food.png";

const Splash = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div
      className="shadow-md rounded 
    flex justify-center items-center
    h-full w-full m-auto bg-[#A27B5C]"
    >
      <motion.div
        initial={{ y: -900, opacity: 0.2 }}
        animate={{ y: 0, opacity: 1.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        exit={{ y: -200, opacity: 0.5, transition: { duration: 0.5 } }}
        className="flex flex-row h-screen relative items-center justify-center sm:justify-between"
      >
        <div className="max-w-[90%] w-[350px] bg-[#647E68] p-8 rounded-xl z-1 shadow-xl">
          <img src={logo} alt="Food Finder Logo" />
          <h2 className="text-[#2C3333] text-center text-3xl font-bold pb-4">
            Food <span className="text-[#ECDBBA]">Finder</span>
          </h2>
          <button
            className="w-full px-6 py-2 text-[#DCD7C9] bg-[#704F4F] rounded-full hover:bg-[#DCD7C9] hover:text-[#04293A] hover:ease-in-out duration-500 shadow-xl "
            onClick={() => {
              navigate("/home");
            }}
          >
            Find Your Next Meal!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Splash;
