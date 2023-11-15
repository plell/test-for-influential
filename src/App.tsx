import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Login />,
  },
  {
    path: "/2",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
