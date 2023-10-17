import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div className="dashboard">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
