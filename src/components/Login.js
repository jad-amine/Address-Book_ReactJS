import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    const target = e.target.name;
    target === "email"
      ? setUser({ ...user, email: value })
      : setUser({ ...user, password: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios("http://localhost:8000/api/user", {
      method: "POST",
      body: user,
    });
    console.log(res);
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          value={user.email}
          name={"email"}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="password"
          value={user.password}
          name={"password"}
          onChange={handleChange}
        />
        <input type="submit" value={"Login"} />
      </form>
    </div>
  );
};

export default Login;
