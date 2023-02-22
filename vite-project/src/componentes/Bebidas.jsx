import React from "react";
import background from '../../public/Img/background-coffee2.png';
// import data from '../api/db.json'
import { Link, useNavigate } from "react-router-dom";
import './Desayunos.css'
import logo from '../../public/Img/logo-white.png';
import Ordenes from "./Ordenes";
import { useState } from "react";
 
const Bebidas = (props) => { 


    return (
        <>
            <div>
                <nav className="navbar navbar-dark fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="bq-logo" className="bq-logo2" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link to="/desayunos" className="nav-link active" aria-current="page" href="#">MENÚ</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/pedidos" className="nav-link" href="#">PEDIDOS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" href="#">CERRAR SESIÓN</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <section className="desayunos" data-testid="desayunos-1">
                <img src={background} alt="background-coffe" className="background-coffe" />
                <img src={logo} alt="bq-logo" className="bq-logo2" />
                <div className="menu-desayunos">
                    <div className="btns-container">
                        <Link to="/desayunos" className="btn-desayunos-off">Desayunos</Link>
                        <Link to="/comidas" className="btn-comidas">Comidas</Link>
                        <Link to="/bebidas" className="btn-bebidas-on">Bebidas</Link>
                    </div>
                    <div className="imagenes">
                        {props.children}
                    </div>
                </div>
                <div className="containerOrdenes">
                    <Ordenes/>
                </div>
            </section>
        </>
    );
}

export default Bebidas;