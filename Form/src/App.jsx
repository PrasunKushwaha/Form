import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Frontpage from "./Frontpage";
import { Routes, Route } from "react-router-dom";
// import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
      </Routes>
      
    </div>
  );
}
export default App;
