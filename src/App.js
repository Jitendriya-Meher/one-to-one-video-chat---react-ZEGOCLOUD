import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Room from "./Components/Room";

function App() {
  return (
    <div className="">

    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/room/:roomId" element={<Room></Room>}></Route>
    </Routes>

    </div>
  );
}

export default App;
