import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ContactsContext } from "../contexts/ContactsContext";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { setAdmin } = useContext(ContactsContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    const target = e.target.name;
    target === "email"
      ? setUser({ ...user, email: value })
      : setUser({ ...user, password: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("http://localhost:8000/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        data: JSON.stringify(user),
      });
      if (res.data.message === "Invalid Credentials") {
        alert("Invalid Credentials");
      } else {
        let token = res.data.token;
        const user_info = JSON.parse(atob(token.split(".")[1]));
        setAdmin(user_info);
        localStorage.setItem("token", res.data.token);
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
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
