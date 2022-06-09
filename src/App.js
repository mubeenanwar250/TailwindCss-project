import "./App.css"
import './index'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from './components/Register'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
