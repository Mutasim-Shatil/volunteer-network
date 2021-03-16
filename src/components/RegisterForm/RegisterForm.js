import React, { useState } from "react";
import navbarLogo from "../../logos/navbar-logo.png";
import "./RegisterForm.css";

const RegisterForm = () => {
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
    }
    console.log(register);
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
          placeholder="Organize books at the library"
          onBlur={handleInput}
          name="category"
        />
        <button className="register__input register__input-btn">
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
