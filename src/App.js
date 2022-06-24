import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await axios("http://localhost:8000/");
    return res.data;
  };

  useEffect(() => {
    const getServerData = async () => {
      const res = await getData();
      setData(res.message);
    };
    getServerData();
  }, []);

  return <h2>{data}</h2>;
}

export default App;
