import "./login.css";
import { useRef } from "react";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
