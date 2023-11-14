import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";

function App() {
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  return <>{loggedIn ? <Dashboard /> : <Login />}</>;
}

export default App;
