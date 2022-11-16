import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import "./App.scss";
import Login from "./Pages/Login/Login";
import Driver from "./Pages/Driver/Driver";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration/login" element={<Login />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/driver/login" element={<Login />} />
        <Route path="/driver/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
