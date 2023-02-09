import React from "react";
import background from '../../public/Img/background-coffee2.png';
// import data from '../api/db.json'
import { Link, useNavigate } from "react-router-dom";
import './Desayunos.css'
import logo from '../../public/Img/logo-white.png';
import menuIcon from '../../public/Img/menu-icon.png';

// const bd = data.products;
// const arrObject = Object.values(bd);

const Desayunos = (props) => {
    return (
        <>
           <section className="desayunos">
                <img src={background} alt="background-coffe" className="background-coffe" />
                <img src={logo} alt="bq-logo" className="bq-logo2" />
                <img src={menuIcon} alt="menu-icon" className="menu-icon-desayunos" />
                <div className="menu-desayunos">
                    <div className="title"><p>DESAYUNOS</p></div>
                        <div className="imagenes">
                            {props.children}
                        </div>
                </div>
                <div className="ordenes"><p>ORDEN</p></div>
           </section>
        </>
    ); 
}

export default Desayunos;