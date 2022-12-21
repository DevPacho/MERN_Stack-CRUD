import { RouterProvider } from "react-router-dom";

import "./App.css";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
import UpdateUser from "./components/UpdateUser";
import UsersList from "./components/UsersList";
import router from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
