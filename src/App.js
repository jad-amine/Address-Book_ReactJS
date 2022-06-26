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


function App() {
  const [data, setData] = useState("");

  // Get contacts from the server
  const getData = async () => {
    const res = await axios("http://localhost:8000/contacts");
    return res.data.contacts;
  };
  useEffect(() => {
    const getServerData = async () => {
      const res = await getData();
      setData(res);
    };
    getServerData();
  }, []);

  
  return (
    <div className="app">
      <Navbar />
      <ContactsContext.Provider value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Contacts />}></Route>
          <Route path="/addContact" element={<AddContact />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </ContactsContext.Provider>
    </div>
  );
}

export default App;
