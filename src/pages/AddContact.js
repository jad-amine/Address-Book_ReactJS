import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    relationship_status: "Single",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios("http://localhost:8000/contacts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "bearer token",
        },
        data: JSON.stringify(contact),
      });
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Contact already exists");
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let target = e.target.name;
    target === "name"
      ? setContact({ ...contact, name: value })
      : target === "email"
      ? setContact({ ...contact, email: value })
      : target === "number"
      ? setContact({ ...contact, number: value })
      : target === "relationship_status"
      ? setContact({ ...contact, relationship_status: value })
      : console.log(contact);
  };
  return (
    <div className="add-contact">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          name="name"
          type="text"
          value={contact.name}
          onChange={handleChange}
        />
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
        />
        <label>Number:</label>
        <input
          name="number"
          type="number"
          value={contact.number}
          onChange={handleChange}
        />
        <label>Relationhsip Status:</label>
        <select
          name="relationship_status"
          value={contact.relationship}
          onChange={handleChange}
        >
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Engaged">Engaged</option>
        </select>
        <input id="last-input" type="submit" value={"Add Contact"} />
      </form>
    </div>
  );
};

export default AddContact;
