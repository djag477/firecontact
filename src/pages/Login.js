import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../auth/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = () => {
    signIn(email, password)
    navigate("/main")
  }



  return (
    <div>
      <div>
        <h1>Login</h1>
        <form id="login"
        onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
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
              value="Login"
              onClick={handleSubmit}
            />
          </div>
          <div>
            <label htmlFor="register">No account yet?</label>
            <input
              type="button"
              value="Sign Up"
              id="register"
              onClick={() => navigate("/register")}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
