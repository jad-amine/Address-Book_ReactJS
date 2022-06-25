import React, { useState } from "react";
import { FaWindowClose, FaSearch } from "react-icons/fa";

const ContactsTable = ({ data, setData }) => {
  const [filteredData, setFilteredData] = useState([...data]);
  const [tableHeader, setTableHeader] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [search, setSearch] = useState("");
  const list = ["Name", "Email", "Number", "Relation Ship", "Location"];

  const toggleSearch = (e) => {
    let newTableHeader = [false, false, false, false, false];
    const index = list.indexOf(e.currentTarget.name);
    newTableHeader[index] = !newTableHeader[index];
    setTableHeader(newTableHeader);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <table>
      <tr id="first">
        {list.map((th, index) => {
          return !tableHeader[index] ? (
            <th key={index}>
              {th}
              <button name={th} onClick={toggleSearch}>
                <FaSearch />
              </button>
            </th>
          ) : (
            <>
              <input type={"text"} value={search} onChange={handleSearch} />
              <FaWindowClose
                onClick={() => {
                  setSearch("");
                  setTableHeader(Array(5).fill(false));
                }}
              />
            </>
          );
        })}
        {/* <th>Name <span><FaSearch onClick={(e)=>console.log(e.target)}/></span></th>
        <th>Email <span><FaSearch /></span></th>
        <th>Number <span><FaSearch /></span></th>
        <th>Relationship Status <span><FaSearch /></span></th>
        <th>Location <span><FaSearch /></span></th>
        <th><input type="text" placeholder={"Name" } onFocus={()=>console.log('hi')}/><span><FaWindowClose /></span></th> */}
      </tr>
      {filteredData.map((contact) => (
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
