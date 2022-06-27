import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaUserPlus, FaListUl, FaMapMarkerAlt } from "react-icons/fa";
import { ContactsContext } from "../contexts/ContactsContext";

const logo = require("../assets/download.png");

const Navbar = () => {
  const { admin, setAdmin, setData } = useContext(ContactsContext);
  console.log(admin);
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      {admin && admin.name}
      <ul>
        <li>
          <NavLink to="/">
            <FaListUl />
            Contacts
          </NavLink>
        </li>
        <li>
          <NavLink to="/addContact">
            <FaUserPlus />
            Add Contact
          </NavLink>
        </li>
        <li>
          {admin !== "null" ? (
            <button
              onClick={() => {
                localStorage.clear();
                setAdmin("null");
                setData("");
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </li>
      </ul>
      <NavLink id="map" to="/map">
        <FaMapMarkerAlt />
        Maps
      </NavLink>
    </div>
  );
};

export default Navbar;
