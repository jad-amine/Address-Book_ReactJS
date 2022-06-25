import React, { useState } from "react";

const SearchInput = ({ th, index, data, setFilteredData }) => {
  const [search, setSearch] = useState("");
  let filteredData = [...data];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let target_value = e.target.value.toLowerCase();
    let target_name = e.target.name.toLowerCase();

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
      : console.log("null");
  };

  return (
    <>
      {th !== "Relation Ship" ? (
        <input name={th} type={"text"} value={search} onChange={handleSearch} />
      ) : (
        <select name="relation" onChange={handleSearch}>
          <option value="married">Married</option>
          <option value="single">Single</option>
        </select>
      )}
    </>
  );
};

export default SearchInput;
