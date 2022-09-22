import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AppBarWithBack = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#647E68] w-full flex justify-center sticky top-0 z-10">
      <h1
        onClick={() => navigate(-1)}
        className="flex justify-center text-xl cursor-pointer"
      >
        <AiOutlineArrowLeft />
        Go Back...
      </h1>
      <div></div>
      <div></div>
    </div>
  );
};

export default AppBarWithBack;
