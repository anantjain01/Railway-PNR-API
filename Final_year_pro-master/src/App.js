import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Ticket from "./component/Ticket";
import Resrtaurants from "./component/Resrtaurants";

function App() {
  return (
    <div className="App  w-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pnr" element={<Ticket />} />
        <Route path="/:pnr/outlets" element={<Resrtaurants />} />
      </Routes>
    </div>
  );
}

export default App;
