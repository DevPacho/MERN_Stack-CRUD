import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import router from "./routes/routes";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
