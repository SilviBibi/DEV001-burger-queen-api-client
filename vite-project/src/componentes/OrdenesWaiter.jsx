import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Table from "./Table";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import logo from '../../public/Img/logo-white.png';
import menuIcon from '../../public/Img/menu-icon.png';
import './OrdenesWaiter.css';

const OrdenesWaiter = () => {
  // 1. Agregar un evento al btn-agregar que cree id de la orden (metodo date now), id mesero,  nombre del cliente, {productos } cantidad, nombre del producto, precio, status, fecha de creación de pedido
  // 2. Mostrar la data en consola
  // 3. Agregar la data la interfaz OrdenesWaiter
  // 4. Agregar un evento a btn-mandarACocina que cree el nuevo objeto de orden en db.json
  // 5. Darle lógica a botón - y + nota: inverstigar useContext y createContext

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const addToCart = (id) => {
    console.log(id)
  }
};
export default OrdenesWaiter;