import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MealResult = ({ meal }) => {
  return (
    <div className="m-2 pb-14">
      <Link to={`recipe/${meal.idMeal}`}>
        <div className="rounded shadow-lg bg-[#3F4E4F] text-[#DCD7C9]">
          <img src={meal.strMealThumb} alt="Meal" loading="lazy" />
          <div className="meal-information px-2 py-4">
            <div className="text-lg truncate hover:text-[#C84B31] transition ease-in-out duration-300">
              {meal.strMeal}
            </div>
            <p className="text-gray-700 truncate  overflow-hidden h-2/4 text-base">
              {meal.strArea}
            </p>
            <p className="text-gray-700 truncate  overflow-hidden h-2/4 text-base">
              {meal.strCategory}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MealResult;
