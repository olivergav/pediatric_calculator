import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/addChild/AddChild";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addchild" element={<AddChild />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
