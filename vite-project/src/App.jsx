import React from "react";
import Home from "./componentes/Home";
import Login from "./componentes/Login";
import AdminProducts from "./componentes/AdminProducts";
import AdminUsers from "./componentes/AdminUsers";
import Waiter from "./componentes/Waiter";
import Chef from "./componentes/Chef"
import Desayunos from "./componentes/Desayunos"
import Cards from "./componentes/Cards";
import CardsComidas from "./componentes/CardsComidas";
import Comidas from "./componentes/Comidas"
//import Bebidas from "./componentes/Bebidas"
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/adminProducts" element={<AdminProducts />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="/desayunos" element={<Desayunos>
            <Cards/>
            

        </Desayunos>} />
        <Route path="/comidas" element={<Comidas>
          <CardsComidas/>

          </Comidas>
      }/>
        {/* <Route path="/bebidas" element={<Bebidas/>}/> */}
        <Route path="/chef" element={<Chef />} />
      </Routes>
    </>
  )
}

export default App;
