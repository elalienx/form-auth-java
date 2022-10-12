// Node modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // Local state
  const [form, setForm] = useState({ email: "", pass: "" });
  const navigate = useNavigate();

  // Properties
  const END_POINT = "http://localhost:8000";
  const METHOD = "POST";
  const HEADERS = {}; // add any security if needed

  // Methods
  function onSubmit(event) {
    console.log("Trying to login using:", form);
    event.preventDefault();
    fetch(END_POINT, {
      method: METHOD,
      headers: HEADERS,
      body: JSON.stringify(form),
    })
      .then((response) => onSuccess(response))
      .catch((error) => onFailure(error));
  }

  function onSuccess(response) {
    console.log(response);
    navigate("/"); // go to home after a susscesfull login
  }

  function onFailure(error) {
    console.error(error);
  }

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
        />
        <br />
        <input
          type="password"
          placeholder="Password (minimum 8 characters)"
          value={form.pass}
          onChange={(event) => setForm({ ...form, pass: event.target.value })}
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
