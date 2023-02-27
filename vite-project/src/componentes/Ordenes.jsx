import React, { useContext } from 'react'
import deleteIcon from '../../public/Img/delete-icon.png';
import { Context } from './context/Context';
import { useState, useEffect } from 'react';
import { helpHttp } from "../helpers/helpHttp";

const initialOrder = {
    id: "",
    userId: "",
    client: "",
    products: [
        {
            products: {
                qty: 0,
                product: {}
            }
        }
    ],
    status: "",
    dateEntry: "",
    dateProcessed: ""
}

const Ordenes = () => {
    const { add, setAdd } = useContext(Context)
    const [order, setOrder] = useState(initialOrder);
    const [db, setDb] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');


    let api = helpHttp();
    let url = "http://localhost:5000/orders";

    useEffect(() => {
        setLoading(true);
        api.get(url)
            .then((res) => {
                if (!res.err) {
                    setDb(res)
                    setError(undefined);
                } else {
                    setDb(undefined);
                    setError(res);
                }
                setLoading(false);
            });
    }, [url]);

    const deleteProduct = (el) => {
        setAdd(add.filter(elements => elements != el))
    }
    const value = add.map(el => el.value * el.qty)
    const total = value.reduce((a, b) => a + b, 0)

    const addProduct = (product) => {
        if (add.find(item => item.id === product.id)) {
            const products = add.map(item =>
                item.id === product.id
                    ? { ...item, qty: item.qty + 1 }
                    : item
            );
            return setAdd([...products])
        }
        setAdd(add => [...add, product])
    };

    const subtractProduct = (product) => {
        if (product.qty < 2) {
            return 1
        }
        else if (add.find(item => item.id === product.id)) {
            const products = add.map(item =>
                item.id === product.id
                    ? { ...item, qty: item.qty - 1 }
                    : item
            );
            return setAdd([...products])
        }
        setAdd(add => [...add, product])
    };

    const handleName = (e) => {
        // console.log(order + 'orden del handleName')
        setName(e.target.value);
    };

    const createOrder = (order) => {
        // console.log(order)
        let options = {
            body: order,
            headers: { "content-type": "application/json" }
        };
        api.post(url, options)
            .then((res) => {
                // console.log(res)

                if (!res.err) {
                    setDb([...db, res])
                } else {
                    setError(res);
                }
            })
            .catch(err => console.log(err))
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Por favor ingresa el nombre del cliente");
            return;
        } else if (add.length === 0) {
            alert("No hay ningún producto seleccionado");
            return;
        } else {
            // setOrder({
            //     ...order,
            //     client: name,
            //     products: add,
            //     dateEntry: new Date(),
            //     status: "ACTIVO",
            //     id: Date.now()
            // })
            createOrder({
                ...order,
                client: name,
                products: add,
                dateEntry: new Date(),
                status: "ACTIVO",
                id: Date.now()
            })
        };
    };

    // console.log(order)



    return (
        <div className="containerOrden-sendKitchen">
            <div className="ordenes">
                <p className='ordenTitle'>ORDEN</p>
                <input className="input-class2" type="text" name="client" placeholder="Nombre del Cliente" onChange={handleName} value={name} />
                <div className="containerOrden">
                    {add.map(el => {
                        return (
                            <div key={el.id * Math.random() * 50000} className='resumenOrden2'>
                                <p className='productSelected'>{el.product}</p>
                                <button className="btnMenos" onClick={() => subtractProduct(el)}>-</button>
                                <p className="counter">{el.qty}</p>
                                <button className="btnMas" onClick={() => addProduct(el)}>+</button>
                                <p className='price'>$ {el.value * el.qty}</p>
                                <img src={deleteIcon} alt="delete-icon" className="delete-icon" onClick={() => deleteProduct(el)} />
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