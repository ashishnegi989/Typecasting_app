import {} from "react";
import "./App.css";
import Contact from "./component/contact/Contact";
import About from "./component/about/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} /> 
        <Route path="/about"  element={<About />} /> 
        <Route path="/contact"  element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
