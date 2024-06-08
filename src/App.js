import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./components/login/Login";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar/>
      <main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/login" exact element={<Login/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
