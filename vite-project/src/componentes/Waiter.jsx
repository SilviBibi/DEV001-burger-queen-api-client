import React from "react";
import background from '../../public/Img/background-burger2.png';
import { Link, useNavigate } from "react-router-dom";
import './Waiter.css'

const Waiter = () => {
    return (
        <>
           <section className="waiter">
                <img src={background} alt="background-burger" className="background-burger" />
                <div className="btn-container">
                    <Link to="/desayunos" className="btn-menu">DESAYUNOS</Link>
                    <Link to="/comidas" className="btn-menu">HAMBURGUESA Y ACOMPAÑAMIENTOS</Link>
                    <Link to="/bebidas" className="btn-menu">BEBIDAS</Link>
                    <Link to="/products" className="btn-menu">ADMIN</Link>
                </div>
           </section>
        </>
    );
}

export default Waiter;