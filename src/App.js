import logo from "./logo.svg";
import "./App.css";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";

//importing the Pages
import Login from "./pages/Login";
import Wallet from "./pages/Wallet";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
