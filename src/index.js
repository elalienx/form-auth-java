// Node modules
import React from "react";
import ReactDOM from "react-dom/client";

// Project files
import App from "./App";
import { UserProvider } from "./global-state/UserProvider";

// Properties
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
