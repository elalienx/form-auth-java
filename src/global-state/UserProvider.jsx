// Node modules
import { createContext, useContext, useState } from "react";

const initialValue = null;
const Context = createContext(initialValue);

export function UserProvider({ children }) {
  // state
  const [user, setUser] = useState(initialValue);

  // Properties
  const value = { user, setUser };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useUser() {
  const context = useContext(Context);
  const errorText = "To use useUser() wrap a component with <UserProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
