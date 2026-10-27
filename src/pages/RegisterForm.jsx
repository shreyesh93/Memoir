import React from "react";
import { useState } from "react";
import "./RegisteryForm.css";
import { Link } from "react-router-dom";

export let registeredUsers = JSON.parse(localStorage.getItem("formData")) || [
  {
    username: "sarthak",
    email: "sarthak31@gmail.com",
    phone: "9773364177",
    password: "12345",
    confirmPass: "12345",
    terms: true,
  },
];

const userTemplate = {
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmPass: "",
  terms: false,
};

const RegisterForm = () => {
  const [formData, setFormData] = useState(userTemplate);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type == "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateFormData = () => {
    const newErrors = {};

    const usernameExists = registeredUsers.some(
      (user) =>
        user.username &&
        user.username.trim().toLowerCase() ===
          formData.username.trim().toLowerCase(),
    );

    const emailExists = registeredUsers.some(
      (user) =>
        user.email &&
        user.email.trim().toLowerCase() === formData.email.trim().toLowerCase(),
    );

    const phoneExists = registeredUsers.some(
      (user) => user.phone && user.phone.trim() === formData.phone.trim(),
    );

    // Username
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.trim().length < 3) {
      newErrors.username = "Username must contain at least 3 characters";
    } else if (usernameExists) {
      newErrors.username = "Username already exists";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    } else if (emailExists) {
      newErrors.email = "Email already exists";
    }

    // Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid Phone Number";
    } else if (phoneExists) {
      newErrors.phone = "Phone number already exists";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
    }

    // Confirm password
    if (!formData.confirmPass) {
      newErrors.confirmPass = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPass) {
      newErrors.confirmPass = "Passwords do not match";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFormData();
    if (!isValid) {
      return;
    }
    registeredUsers = [...registeredUsers, formData];
    localStorage.setItem("formData", JSON.stringify(registeredUsers));
    console.log(registeredUsers);

    console.log("Submitted", formData);
    alert("User Registered successfully");
    setSubmittedData(formData);
    setSubmitted(true);
    setFormData(userTemplate);
  };

  const handleReset = () => {
    setFormData(userTemplate);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="Registry-form">
      <div className="form-card">
        <div className="form-header">
          <h1>Create a new account Now!</h1>
          <p>Sign-Up now and get extra 10% off deals</p>
        </div>

        {/* === Success Message */}
        {submitted && (
          <div className="success-message">Registered successfully </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter a username: "
            autoComplete="username"
          />
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email Address: "
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone: </label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone Number: "
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password: "
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmPass">Confirm Password: </label>
          <input
            type="password"
            id="confirmPass"
            name="confirmPass"
            value={formData.confirmPass}
            onChange={handleChange}
            placeholder="Confirm your Password: "
            autoComplete="new-password"
          />
          <small>
            Password must contain at least one uppercase letter, one lowercase
            letter, and one number
          </small>
          {errors.confirmPass && <p>{errors.confirmPass}</p>}
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={formData.terms}
            onChange={handleChange}
            placeholder="Confirm your Password: "
            autoComplete="new-password"
          />
          <label htmlFor="terms">I agree to the ternms and condition </label>
          {errors.terms && <p>{errors.terms}</p>}
        </div>
        <div className="Form-btns">
          <button type="submit" className="submit-btn">
            Sign-Up
          </button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {submitted && (
        <div className="preview-card">
          <h2>Sign-up Preview</h2>
          <div className="preview-item">
            <strong>Userame:</strong>
            <span>{submittedData.username}</span>
          </div>
          <div className="preview-item">
            <strong>Email:</strong>
            <span>{submittedData.email}</span>
          </div>
          <div className="preview-item">
            <strong>Phone Number:</strong>
            <span>{submittedData.phone}</span>
          </div>
        </div>
      )}

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
