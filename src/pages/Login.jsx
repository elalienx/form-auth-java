// Node modules
import { useState } from "react";

export default function Login() {
  // Local state
  const [form, setForm] = useState({ email: "", pass: "" });

  // Properties
  const END_POINT = "http://localhost:8000";
  const METHOD = "POST";
  const HEADERS = {}; // add any security if needed

  // Methods
  function onSubmit(event) {
    console.log("Sending...", form);
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
        <input
          type="password"
          placeholder="Password (minimum 8 characters)"
          value={form.pass}
          onChange={(event) => setForm({ ...form, pass: event.target.value })}
        />
        <button>Login!</button>
      </form>
    </div>
  );
}
