import React from "react";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import Products from "./componentes/Products";
import Waiter from "./componentes/Waiter";
import Chef from "./componentes/Chef"
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/waiter" element={<Waiter/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/chef" element={<Chef/>}/>
    </Routes>
    </>
  )
}

export default App;
