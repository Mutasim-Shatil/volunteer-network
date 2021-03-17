import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import navbarLogo from "../../logos/navbar-logo.png";
import "./RegisterForm.css";

const RegisterForm = () => {
    const { id } = useParams()
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/volunteerCategory/" + id)
        .then(res => res.json())
        .then(data => setCategories(data))
    },[id])
    console.log(categories);
    const [register, setRegister] = useState({
        name: "",
        email: "",
        date: "",
        description: "",
        category: "",
    })
    const handleInput = (e) => {
        const allRegister = {...register}
        allRegister[e.target.name] = e.target.value
        setRegister(allRegister)
        e.preventDefault();
    }
    console.log(register);
  return (
      <>
      {
          categories.map(category => {
              return (
                <div className="register-form">
                  <div className="login">
                    <div className="login__header">
                      <img src={navbarLogo} alt="" />
                    </div>
                  </div>
                  <div className="register">
                    <h3 className="register__input">Register as a volunteer</h3>
                    <input
                      className="register__input"
                      type="text"
                      placeholder="Full Name"
                      onBlur={handleInput}
                      name="name"
                    />
                    <input
                      className="register__input"
                      type="text"
                      placeholder="Username or Email"
                      onBlur={handleInput}
                      name="email"
                    />
                    <input
                      className="register__input"
                      type="date"
                      placeholder="Date"
                      onBlur={handleInput}
                      name="date"
                    />

                    <input
                      className="register__input"
                      type="text"
                      placeholder="Description"
                      onBlur={handleInput}
                      name="description"
                    />
                    <input
                      className="register__input"
                      type="text"
                      placeholder="Category"
                      onBlur={handleInput}
                      name="category"
                      defaultValue={category.title}
                    />
                    <button className="register__input register__input-btn">
                      Register
                    </button>
                  </div>
                </div>
              );
          })
      }
    
    </>
  );
};

export default RegisterForm;
