import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://teb.onrender.com/api/login", form);
      setMessage("Zalogowano! Token: " + res.data.token);
      // zapisz token jeśli chcesz: localStorage.setItem("token", res.data.token);
    } catch (err) {
      setMessage("Błąd logowania");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Logowanie</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
      <input name="password" type="password" placeholder="Hasło" onChange={handleChange} required /><br />
      <button type="submit">Zaloguj się</button>
      <p>{message}</p>
    </form>
  );
}
