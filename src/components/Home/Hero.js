import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../../data/Data";
import './Hero.css'

const Hero = () => {
  const allCategories = Category;
  console.log(allCategories);
  return (
    <div className="hero">
      {allCategories.map((category) => {
        return (
          <div className="category">
            <Link to={category.id} className='set-link'>
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
