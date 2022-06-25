import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserPlus, FaListUl } from "react-icons/fa";

const logo = require("../assets/download.png");

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul>
        <li>
          <FaListUl />
          <NavLink to="/">Contacts</NavLink>
        </li>
        <li>
          <FaUserPlus />
          <NavLink to="/addContacts">Add Contact</NavLink>
        </li>
      </ul>
      <h1>Maps</h1>
    </div>
  );
};

export default Navbar;
