import { useState } from "react";
import "./App.css";
import Navbar from "./componetns/navbar/Navbar";
import Home from "./componetns/home/Home";
import Sidebar from "./componetns/sidebar/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
      <Sidebar />
      <Home />
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
