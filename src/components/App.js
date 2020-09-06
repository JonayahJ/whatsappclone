import React from 'react';
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";

function App() {
  // setting the ID (so it doesn't save "undefined") to save in local storage (via hooks)
  const [id, setId] = useLocalStorage("ID")
  
  return (
      id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />  
    );
}

export default App;
