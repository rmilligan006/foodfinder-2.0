import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const RecommendedItem = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((response) => response.json())
      .then((data) => setMeals(data.meals))
      .catch((error) => console.log(error));
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="p-2"
    >
      {meals.map((meal) => (
        <Link to={`recipe/${meal.idMeal}`}>
          <motion.div>
            <div class="rec-container">
              <div class="shadow-top rounded-lg"></div>
              <h1 className="absolute text-white hover:text-[#C84B31] transition duration-300">
                {meal.strMeal}
              </h1>
              <div class="img-container">
                <img
                  src={meal.strMealThumb}
                  alt="meal"
                  className="rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default RecommendedItem;
