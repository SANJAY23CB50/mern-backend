import { useState } from "react";
import API from "../api";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async () => {
    const res = await API.post("/auth/register", form);
    console.log(res.data); // shows user object with _id
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;
