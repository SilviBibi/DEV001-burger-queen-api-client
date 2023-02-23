import React, { useContext } from 'react'
import deleteIcon from '../../public/Img/delete-icon.png';
import { Context } from './context/Context';
import { useState } from 'react';

const initialOrder =  {
      idOrder: "",
      userId: "",
      client: "",
      products:[
        {
          products: {
            qty: 1,
            product:{}
          }
          }
      ],
      status: "",
      dateEntry: "",
      dateProcessed: ""
    };

const Ordenes = () => {
    const { add, setAdd } = useContext(Context)
    let [ counter, setCounter ]= useState(1)

    const handleChange = (el) => {
        setAdd(add.filter(elements => elements != el))
    }
    const value = add.map(el => el.value)
    const total = value.reduce((a, b) => a + b, 0)

    const increase = () => {
        setCounter(counter+= 1)
    }

    const decrease = () => {
        setCounter(counter-=1)
    }

    const [order, setOrder] = useState(initialOrder);

    const handleName = (e) => {
        setOrder({
            ...order,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!order.client) {
            alert("Por favor ingresa el nombre del cliente");
            return;
        }else if (add.length === 0) {
            alert("No hay ningún producto seleccionado");
            return;
        }else{
             setOrder({
            ...order,
            [e.target.dateEntry]: new Date ()
        });
            console.log(order)
        }
    };

    return (
        <div className="containerOrden-sendKitchen">
            <div className="ordenes">
                <p className='ordenTitle'>ORDEN</p>
                <input className="input-class2" type="text" name="client" placeholder="Nombre del Cliente" onChange={handleName} value={order.client}/>
                <div className="containerOrden">
                    {add.map(el => {
                        return (
                            <div key={el.id*Math.random()*50000} className='resumenOrden2'>
                                <p className='productSelected'>{el.product}</p>
                                <button className="btnMenos" onClick={decrease}>-</button>
                                <p className="counter">{counter}</p>
                                <button className="btnMas" onClick={increase}>+</button>
                                <p className='price'>$ {el.value}</p>
                                <img src={deleteIcon} alt="delete-icon" className="delete-icon" onClick={() => handleChange(el)} />
                            </div>
                        )
                    })}
                    <div className="total">
                        <p className="productSelected">Total</p>
                        <p className="productSelected">$ {total}</p>
                    </div>
                    <div className="btnSendKitchen">
                        <button className="btn-kitchen" onClick={handleSubmit}>MANDAR A COCINA</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Ordenes