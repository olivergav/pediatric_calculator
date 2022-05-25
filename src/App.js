import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddChild from "./components/addChild/AddChild";
import HomePage from "./components/homePage/HomePage";
import Dose from "./components/dose/Dose";
import {useState} from "react";

const children = [
  {
    "id": 1,
    "name": "Janusz"
  },
  {
    "id": 2,
    "name": "Karyna"
  },
  {
    "id": 3,
    "name": "Grażyna"
  }
]

function App() {
  const [activeChild, setActiveChild] = useState(1);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage children={children} activeChild={activeChild} setActiveChild={setActiveChild}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addchild" element={<AddChild />} />
          <Route path="/dose/:id" element={<Dose children={children} activeChild={activeChild} setActiveChild={setActiveChild}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
