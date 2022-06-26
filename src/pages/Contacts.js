import React, { useContext } from "react";
import ContactsTable from "../components/ContactsTable";
import { ContactsContext } from "../contexts/ContactsContext";

const Contacts = () => {
  const {data, setData} = useContext(ContactsContext)
  return (
    <div>
      {data && <ContactsTable data={data} setData={setData}/>}
    </div>
  );
};

export default Contacts;
