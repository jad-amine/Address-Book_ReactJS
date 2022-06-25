import React, { useState } from "react";

const SearchInput = ({ th, index, data, setFilteredData }) => {
  const [search, setSearch] = useState("");
  let filteredData = [...data];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    let target_value = e.target.value;
    let target_name = e.target.name.toLowerCase();
    
    target_name === "name"
      ? setFilteredData(
          filteredData.filter((contact) => {
            return (contact.name.search(target_value) !== -1);
          })
        )
      : console.log("null");
  };

  return (
    <>
      <input name={th} type={"text"} value={search} onChange={handleSearch} />
    </>
  );
};

export default SearchInput;
