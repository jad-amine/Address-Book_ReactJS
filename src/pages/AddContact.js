import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Map from "./Map";
import { ContactsContext } from "../contexts/ContactsContext";

const AddContact = () => {
  const { data, setData } = useContext(ContactsContext);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    relationship_status: "Single",
    location: null,
  });
  const [hiddenMap, setHiddenMap] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (contact.location) {
      try {
        const res = await axios("http://localhost:8000/contacts", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: "bearer token",
          },
          data: JSON.stringify(contact),
        });
        setData([...data, res.data.result])
        navigate("/");
      } catch (err) {
        console.log(err);
        alert("Contact already exists");
      }
    } else {
      alert("Please enter contact location !!");
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
          required
        />
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <label>Number:</label>
        <input
          name="number"
          type="number"
          value={contact.number}
          onChange={handleChange}
          required
        />
        <label>Relationhsip Status:</label>
        <select
          name="relationship_status"
          value={contact.relationship}
          onChange={handleChange}
          required
        >
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Engaged">Engaged</option>
        </select>
        <input
          type="button"
          value={"Add Location"}
          onClick={() => {
            console.log(contact);
            setHiddenMap(true);
          }}
          required
        />
        <input id="last-input" type="submit" value={"Add Contact"} />
      </form>
      {hiddenMap && <Map contact={contact} setContact={setContact} />}
    </div>
  );
};

export default AddContact;
