import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ContactsTable from "../components/ContactsTable";

const Contacts = () => {
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await axios("http://localhost:8000/contacts");
    return res.data.contacts;
  };

  useEffect(() => {
    const getServerData = async () => {
      const res = await getData();
      setData(res);
      console.log(res);
    };
    getServerData();
  }, []);
  return (
    <div>
      {data && <ContactsTable data={data}/>}
    </div>
  );
};

export default Contacts;
