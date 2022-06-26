import React from "react";
import { NavLink } from "react-router-dom";
import { FaUserPlus, FaListUl, FaMapMarkerAlt } from "react-icons/fa";

const logo = require("../assets/download.png");

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul>
        <li>
          <NavLink to="/"><FaListUl />Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/addContact"><FaUserPlus />Add Contact</NavLink>
        </li>
      </ul>
      <NavLink id="map" to="/map"><FaMapMarkerAlt />Maps</NavLink>
    </div>
  );
};

export default Navbar;
