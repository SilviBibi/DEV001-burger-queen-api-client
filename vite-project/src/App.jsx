import React from "react";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import AdminProducts from "./componentes/AdminProducts";
import AdminUsers from "./componentes/AdminUsers";
import Chef from "./componentes/Chef"
import Desayunos from "./componentes/Desayunos"
import Cards from "./componentes/Cards";
import CardsComidas from "./componentes/CardsComidas";
import CardsBebidas from "./componentes/CardsBebidas";
import Comidas from "./componentes/Comidas"
import Bebidas from "./componentes/Bebidas"
import { Routes, Route } from "react-router-dom";
import ContextProvider from "./componentes/context/Context";

export function App() {

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/desayunos" element={<Desayunos>
          <Cards />
        </Desayunos>} />
        <Route path="/comidas" element={<Comidas>
          <CardsComidas />
        </Comidas>
        } />
        <Route path="/bebidas" element={<Bebidas>
          <CardsBebidas />
        </Bebidas>
        } />
        {/* <Route path="/bebidas" element={<Bebidas/>}/> */}
        <Route path="/chef" element={<Chef />} />
      </Routes>
    </ContextProvider>
  )
}

export default App;
