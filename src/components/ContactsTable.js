import React from "react";

const ContactsTable = ({ data }) => {
  return (
    <table>
      <tr id="first">
        <th>Name</th>
        <th>Email</th>
        <th>Number</th>
        <th>Relationship Status</th>
        <th>Location</th>
      </tr>
      {data.map((contact) => (
      <tr key={contact._id}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.number}</td>
        <td>{contact.number}</td>
        <td>{contact.number}</td>
      </tr>
      ))}
    </table>
  );
};

export default ContactsTable;
