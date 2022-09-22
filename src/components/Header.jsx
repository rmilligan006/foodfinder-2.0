import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="bg-[#647E68] w-full h-full text-center sticky top-0 z-10"
    >
      <h1 className="text-5xl shadow-xl pb-4 pt-4">
        Food<span className="text-[#ECDBBA] bg-[#553939] p-2">Finder</span>
      </h1>
    </motion.div>
  );
};

export default Header;
