import React, { useState, useEffect } from 'react'
import { helpHttp } from "../helpers/helpHttp";
import './PedidosChef.css'
import Swal from 'sweetalert2'

const PedidosChef2 = ({ data }) => {
    // console.log(data)

    const [loading, setLoading] = useState(false);
    const [db, setDb] = useState([]);
    const [error, setError] = useState(undefined);

    let api = helpHttp();
    let url = "http://localhost:5000/orders";

    // Conseguir la data del endpoint orders
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

    // Crear función que se encarga de actualizar una orden en específico
    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`

        // console.log(endpoint)
        // debugger
        data.status = "LISTO PARA ENTREGAR"
        data.dateProcessed = new Date()

        let options = {
            body: data,
            headers: { "content-type": "application/json" }
        };
        api.put(endpoint, options)
            .then((res) => {
                if (!res.err) {
                    const newData = db.map(el => el.id === data.id ? data : el);
                    console.log(data)
                    setDb(newData);
                    // console.log(newData)
                } else {
                    setError(res);
                };
            });
    };

    // Declarar una función que se encarga de llamar updateData

    const handleSubmit = (product) => {

        Swal.fire({
            title: '¿Seguro que el pedido está listo?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, enviar!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Enviado!',
                    'El pedido ha sido enviado con éxito.',
                    'success'
                )
            } if (product.id === undefined) {
                console.log('El pedido no existe')
            } else {
                updateData(product)
            }

        })
    };




    return (
        <div className='container-cards-pedidos'>
            {data.map(product => {
                // console.log(product.products)
                if (product.status === 'EN PROCESO') {
                    return (
                        <div key={product.id * Math.random() * 50000} className="cardsPedidos">
                            <p className='product-client'>{product.client}</p>
                            {product.products.map(order => {
                                return (
                                    <div key={product.id * Math.random() * 50000}>
                                        <p>{order.qty} {order.product}</p>
                                    </div>
                                )
                            })}
                            <p className="">Hora de entrada: {product.dateEntry}</p>
                            <button className='btn-deliver' onClick={() => handleSubmit(product)}>Listo para entregar</button>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default PedidosChef2