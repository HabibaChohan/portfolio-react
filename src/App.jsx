import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Navebar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill.jsx";
import Contact from "./components/Contact";


const App = () => {


  return (
    
   
 
   

   <BrowserRouter>
    <Navebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </BrowserRouter>
  
   
);

}

export default App;