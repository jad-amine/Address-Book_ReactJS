import React, { useState } from "react";

const SearchInput = ({ th, index, data, setFilteredData }) => {
  const [search, setSearch] = useState("");
  let filteredData = [...data];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let target_value = e.target.value.toLowerCase();
    let target_name = e.target.name.toLowerCase();
    console.log(target_name, target_value)

    target_name === "name"
      ? setFilteredData(
          filteredData.filter((contact) => {
            let name = contact.name.toLowerCase();
            return name.search(target_value) !== -1;
          })
        )
      : target_name === "email"
      ? setFilteredData(
          filteredData.filter((contact) => {
            let email = contact.email.toLowerCase();
            return email.search(target_value) !== -1;
          })
        )
      : target_name === "number"
      ? setFilteredData(
          filteredData.filter((contact) => {
            let number = String(contact.number);
            return number.search(target_value) !== -1;
          })
        )
      : target_name === "relation"
      ? setFilteredData(
          filteredData.filter((contact) => {
            let relation = contact.relationship_status.toLowerCase();
            console.log(relation);
            return relation.search(target_value) !== -1;
          })
        )
      : console.log("null");
  };

  return (
    <>
      {th !== "Relation Ship" ? (
        <input name={th} type={"text"} value={search} onChange={handleSearch} />
      ) : (
        <select id="relation" name="relation" value={search} onChange={handleSearch}>
          <option value="">All</option>
          <option value="Married">Married</option>
          <option value="Single">Single</option>
          <option value="Engaged">Engaged</option>
        </select>
      )}
    </>
  );
};

export default SearchInput;
