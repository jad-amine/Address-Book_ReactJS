import axios from "axios";
import { useEffect, useState } from "react";
import { Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";

function App() {
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
    <div className="app">
      <Navbar />
      {/* <Routes></Routes> */}
      <h1>Contacts</h1>
      {/* {data &&
        data.map((contact) => (
          <div key={contact._id} className="contact">
            <h2>{contact.name}</h2>
            <h3>{contact.email}</h3>
          </div>
        ))} */}
    </div>
  );
}

export default App;
