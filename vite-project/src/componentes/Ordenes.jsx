import React, {useContext} from 'react'
import deleteIcon from '../../public/Img/delete-icon.png';
import { useState } from 'react';
import { Context } from './context/Context';

const Ordenes = () => {
     const example = useContext(Context)

    return (
        <>
            <div className="ordenes">
                <p>ORDEN</p>
                <input type="text" className="input-class2" placeholder="Nombre del Cliente"></input>
            </div>


            <div className="containerOrden-sendKitchen">
                <div className="containerOrden">
                    <div className="resumenOrden2">
                        <p className="productSelected">Name</p>
                        <button className="btnMenos">-</button>
                        <p className="counter">1</p>
                        <button className="btnMas">+</button>
                        <p className="price">Price</p>
                        <img src={deleteIcon} alt="delete-icon" className="delete-icon" />
                    </div>
                    <div className="total">
                        <p className="productSelected">Total</p>
                        <p className="productSelected">$ </p>
                    </div>
                </div>


                <div className="btnSendKitchen">
                    <button className="btn-kitchen">MANDAR A COCINA</button>
                </div>
            </div>
        </>
    )
}


export default Ordenes