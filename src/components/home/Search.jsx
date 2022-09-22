import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//components
import ForYou from "./ForYou";

const Search = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals))
      .catch((error) => console.log(error));
  }, [search]);

  return (
    <div className="bg-[#A27B5C] w-full h-full">
      <div className="mb-4 bg-[#647E68] w-full p-4 text-center sticky top-0 z-10 shadow-xl">
        <h1 className="text-3xl font-bold">Search for yer next meal!</h1>
      </div>
      <div className="text-center">
        <form>
          <input
            type="search"
            className="bg-purple-100 px-3 py-2 shadow rounded-full border-0"
            value={search}
            placeholder="search for meal"
            onChange={handleChangeSearch}
          />
        </form>
      </div>

      <div className="search-container ">
        <div className="mt-4 ">
          {search ? (
            <div className="grid grid-cols-2 sm:grid-cols-5 py-1">
              {recipe ? (
                recipe.map((meal) => (
                  <Link to={`recipe/${meal.idMeal}`}>
                    <div className="rounded shadow-lg m-1 bg-[#647E68]">
                      <img
                        className="rounded-t-lg"
                        src={meal.strMealThumb}
                        alt="Meal"
                        loading="lazy"
                      />
                      <div className="meal-information px-2 py-4">
                        <div className="text-sm truncate text-[#DCD7C9]">
                          {meal.strMeal}
                        </div>
                        <p className="text-[#DCD7C9] truncate overflow-hidden h-2/4 text-base">
                          {meal.strArea}
                        </p>
                        <p className="text-[#DCD7C9] truncate overflow-hidden h-2/4 text-base">
                          {meal.strCategory}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-20 text-center">
                  <h1 className="text-center">No meal found</h1>
                </div>
              )}
            </div>
          ) : (
            <ForYou />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
