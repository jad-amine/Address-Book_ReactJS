// Utilities
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { ContactsContext } from "./contexts/ContactsContext";
import axios from "axios";

// Components & Context
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import Map from "./pages/Map";
import "./App.css";
import Login from "./pages/Login";

function App() {
  const [data, setData] = useState("");
  const [admin, setAdmin] = useState("null");

  console.log('from app')

  // Get contacts from the server
  const getData = async () => {
    const res = await axios("http://localhost:8000/contacts", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.data.contacts;
  };
  useEffect(() => {
    const getServerData = async () => {
      const res = await getData();
      setData(res);
    };
    getServerData();
    if (localStorage.token) {
      let token = localStorage.getItem("token");
      const user_info = JSON.parse(atob(token.split(".")[1]));
      console.log('from useEffect')
      setAdmin(user_info);
    }
  }, []);

  return (
    <div className="app">
      <ContactsContext.Provider value={{ data, setData, admin, setAdmin }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Contacts />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/addContact" element={<AddContact />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </ContactsContext.Provider>
    </div>
  );
}

export default App;
