import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/categories/Home";
import About from "./components/categories/About";
import Politics from "./components/categories/Politics";
import Sports from "./components/categories/Sports";
import Header from "./components/Header/Header";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/politics" element={<Politics />} />
      </Routes>
    </>
  );
}

export default App;
