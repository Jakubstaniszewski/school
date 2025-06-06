import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://teb.onrender.com/api/register", form);
      setMessage(res.data.message || "Zarejestrowano pomyślnie!");
    } catch (err) {
      setMessage("Błąd rejestracji");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <h2>Rejestracja</h2>
      <input name="name" placeholder="Imię" onChange={handleChange} required /><br />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required /><br />
      <input name="password" type="password" placeholder="Hasło" onChange={handleChange} required /><br />
      <button type="submit">Zarejestruj</button>
      <p>{message}</p>
    </form>
  );
}
