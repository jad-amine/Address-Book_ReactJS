import React, { useState } from "react";
import { FaWindowClose, FaSearch } from "react-icons/fa";
import SearchInput from "./SearchInput";

const ContactsTable = ({ data }) => {
  const [filteredData, setFilteredData] = useState([...data]);
  const [tableHeader, setTableHeader] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const list = ["Name", "Email", "Number", "Relation Ship", "Location"];

  const toggleSearch = (e) => {
    let newTableHeader = Array(5).fill(false);
    setFilteredData([...data]);
    const index = list.indexOf(e.currentTarget.name);
    newTableHeader[index] = !newTableHeader[index];
    setTableHeader(newTableHeader);
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
            <div className="search-input">
              <SearchInput
                th={th}
                index={index}
                data={data}
                setFilteredData={setFilteredData}
              />
              <button>
                <FaWindowClose
                  onClick={() => {
                    setTableHeader(Array(5).fill(false));
                    setFilteredData([...data]);
                  }}
                />
              </button>
            </div>
          );
        })}
      </tr>
      {filteredData.map((contact) => (
        <tr key={contact._id}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.number}</td>
          <td>{contact.relationship_status}</td>
          <td>{contact.number}</td>
        </tr>
      ))}
    </table>
  );
};

export default ContactsTable;
