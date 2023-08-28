import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Movies Lib</h1>
      <Outlet />
    </div>
  );
}

export default App;
