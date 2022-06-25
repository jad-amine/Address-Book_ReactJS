import React, { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    relationship: "Single",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let target = e.target.name;
    target === "name"
      ? setContact({ ...contact, name: value })
      : console.log("hi");
    console.log(contact);
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
        <input name="email" type="text" />
        <label>Number:</label>
        <input name="number" type="number" />
        <label>Relationhsip Status:</label>
        <input type="submit" value={"Add Contact"}/>
      </form>
    </div>
  );
};

export default AddContact;
