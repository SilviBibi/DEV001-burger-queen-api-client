import React, { useContext } from 'react'
import deleteIcon from '../../public/Img/delete-icon.png';
import { Context } from './context/Context';

const Ordenes = () => {
    const { add } = useContext(Context)
    console.log(add)

    return (
        <div className="containerOrden-sendKitchen">
            <div className="ordenes">
                <p className='ordenTitle'>ORDEN</p>
                <input type="text" className="input-class2" placeholder="Nombre del Cliente"></input>
                <div className="containerOrden">
                    {add.map(el => {
                        return (
                            <div key={el.id} className='resumenOrden2'>
                                <p className='productSelected'>{el.product}</p>
                                <button className="btnMenos">-</button>
                                <p className="counter">1</p>
                                <button className="btnMas">+</button>
                                <p className='price'>{el.value}</p>
                                <img src={deleteIcon} alt="delete-icon" className="delete-icon" />
                            </div>
                        )
                    })}
                    <div className="total">
                        <p className="productSelected">Total</p>
                        <p className="productSelected">$ </p>
                    </div>
                    <div className="btnSendKitchen">
                        <button className="btn-kitchen">MANDAR A COCINA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ordenes