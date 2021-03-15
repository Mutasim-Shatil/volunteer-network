import React from "react";
import { Category } from "../../data/Data";

const Hero = () => {
  const allCategories = Category;
  console.log(allCategories);
  return (
    <div>
      {allCategories.map((category) => {
        return (
          <div>
            <h1>{category.title}</h1>
            <img src={category.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
