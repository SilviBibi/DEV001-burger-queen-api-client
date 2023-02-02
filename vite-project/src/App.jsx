import React from "react";
import Login from "./componentes/Login";
import Products from "./componentes/Products";
import Waiter from "./componentes/Waiter";
import Chef from "./componentes/Chef"
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/waiter" element={<Waiter/>}/>
      <Route path="/chef" element={<Chef/>}/>
    </Routes>
    </>
  )
}

export default App;
