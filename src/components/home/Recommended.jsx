import React from "react";
import RecommendedItem from "./RecommendedItem";
import { motion } from "framer-motion";
const Recommended = () => {
  return (
    <div className="">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="px-4 py-2 text-2xl text-[#DCD7C9]"
      >
        Recommended Today:
      </motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 text-center pb-2">
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
        <RecommendedItem />
      </div>
    </div>
  );
};

export default Recommended;
