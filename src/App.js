import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";
import Map from "./pages/Map";

function App() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Contacts />}></Route>
        <Route path="/addContact" element={<AddContact />}></Route>
        <Route path="/map" element={<Map />}></Route>
      </Routes>
    </div>
  );
}

export default App;
