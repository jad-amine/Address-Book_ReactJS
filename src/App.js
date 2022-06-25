
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Contacts from "./pages/Contacts";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
