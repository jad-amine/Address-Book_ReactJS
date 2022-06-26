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
          <NavLink to="/addContact">Add Contact</NavLink>
        </li>
      </ul>
      <NavLink to="/map">Maps</NavLink>
    </div>
  );
};

export default Navbar;
