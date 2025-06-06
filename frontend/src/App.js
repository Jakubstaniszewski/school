import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get("https://teb.onrender.com/api/test")
      .then(res => setData(res.data.status))
      .catch(() => setData("Błąd połączenia"));
  }, []);

  return <h1>{data}</h1>;
}

export default App;
