import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Hero.css'

const Hero = () => {
  // const allCategories = Category;
  // console.log(allCategories);
  const [allCategories, setAllCategories] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/volunteerCategory")
    .then(res => res.json())
    .then(data => setAllCategories(data))
  }, [])
  return (
    <div className="hero">
      {allCategories.map((category) => {
        return (
          <div className="category">
            <Link to={`/register/${category.id}`} className="set-link">
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
