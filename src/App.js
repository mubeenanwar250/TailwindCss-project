import "./App.css"
import './index'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/form/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/form/SignUp";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/signinform" element={<SignIn />} />
          <Route exact path="/signupform" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
