"use client"
import './App.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header'
import Home from './pages/Home'
function App() {

  return (
    <>
      <BrowserRouter>
    
        <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />}></Route>
        <Route exact={true} path="/home" element={<Home />}></Route>
        {/* <Route exact={true} path="/about" element={<AboutUs />}></Route>
        <Route exact={true} path="/contact" element={<ContatcUs />}></Route> */}
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App
