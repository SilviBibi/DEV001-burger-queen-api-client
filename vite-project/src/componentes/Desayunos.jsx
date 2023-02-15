import React from "react";
import background from '../../public/Img/background-coffee2.png';
// import data from '../api/db.json'
import { Link, useNavigate } from "react-router-dom";
import './Desayunos.css'
import logo from '../../public/Img/logo-white.png';
import menuIcon from '../../public/Img/menu-icon.png';
import Ordenes from "./Ordenes";
import { useState } from "react";

const Desayunos = (props) => {

    return (
        <>
            <section className="desayunos" data-testid="desayunos-1">
                <img src={background} alt="background-coffe" className="background-coffe" />
                <img src={logo} alt="bq-logo" className="bq-logo2" />
                <img src={menuIcon} alt="menu-icon" className="menu-icon-desayunos" />
                <div className="menu-desayunos">
                    <div className="title"><p>DESAYUNOS</p></div>
                    <div className="imagenes">
                        {props.children}
                    </div>
                </div>
                <div className="containerPedidos">
                    <Ordenes/>
                </div>
            </section>
        </>
    );
}

export default Desayunos;