import React from "react";
import background from '../../public/Img/background-coffee2.png';
// import data from '../api/db.json'
import { Link, useNavigate } from "react-router-dom";
import './Desayunos.css'

// const bd = data.products;
// const arrObject = Object.values(bd);

const Desayunos = (props) => {
    return (
        <>
           <section className="desayunos">
                <img src={background} alt="background-coffe" className="background-coffe" />
                <div className="menu-desayunos">
                <div className="tittle"><p>DESAYUNOS</p></div>
                    <div className="imagenes">
                        {props.children}
                    </div>
                </div>
                <div className="ordenes"><p>hola</p></div>
           </section>
        </>
    );
}

export default Desayunos;