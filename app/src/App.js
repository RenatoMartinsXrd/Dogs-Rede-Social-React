import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Header } from './components/Generic/Header';
import { Login } from "./pages/Login";
import { Footer } from "./components/Generic/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
