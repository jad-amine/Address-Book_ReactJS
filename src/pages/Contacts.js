import React, { useContext } from "react";
import ContactsTable from "../components/ContactsTable";
import { ContactsContext } from "../contexts/ContactsContext";

const Contacts = () => {
  const { data, setData } = useContext(ContactsContext);
  console.log(data);
  return (
    <div>
      {data ? (
        <ContactsTable data={data} setData={setData} />
      ) : (
        <div>
          <h2 id="plz-login">Please Login to view contacts</h2>
        </div>
      )}
    </div>
  );
};

export default Contacts;
