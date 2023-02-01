import React from "react";
import Login from "./componentes/Login";
import Products from "./componentes/Products";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/products" element={<Products/>}/>
    </Routes>
    </>
  )
}

export default App;
