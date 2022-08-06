import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../auth/firebase"

const Register = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    const displayName = `${firstName} ${lastName}`
    createUser(email, password, displayName)
    navigate("/")
  }

  return (
    <div>
      <div>
        <h1>Register</h1>
        <form id="register" onSubmit={handleSubmit}>
          <div>
            <label> First Name:</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name..."
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label> Last Name:</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name..."
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="Create Account"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
