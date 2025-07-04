import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from './Components/Navbar/Navbar';
import Footer from "./Components/Footer/Footer";
import Menu from "./Pages/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container-global">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
