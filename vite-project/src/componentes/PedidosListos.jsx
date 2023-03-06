import React, { useState, useEffect } from 'react'
import { helpHttp } from "../helpers/helpHttp";
import './PedidosChef.css'
import background from '../../public/Img/background-chefs2.png';
import logo from '../../public/Img/logo-white.png';
import { Link } from "react-router-dom";
// import Swal from 'sweetalert2'

const PedidosListos = () => {
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
        data.status = "CERRADO"

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

        // Swal.fire({
        //     title: '¿Seguro que el pedido está listo?',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: '¡Sí, mandar!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire(
        //             '¡Enviado!',
        //             'El pedido ha sido enviado.',
        //             'success'
        //         )
        //     }

        // })

        if (product.id === undefined) {
            console.log('El pedido no existe')
        } else {
            updateData(product)
        }
    };




    return (
        <>
            <img src={background} alt="background-coffe" className="background-coffe" />
            <img src={logo} alt="bq-logo" className="bq-logo2" />

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
                                        <Link to="/desayunos" className="nav-link" aria-current="page" href="#">MENÚ</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/pedidos-listos" className="nav-link active" href="#">PEDIDOS</Link>
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

            <div className="btns-container">
                <p className="orders-title">Pedidos listos</p>
            </div>

            <div className='container-cards-pedidos'>
                {db.map(product => {
                    // console.log(product.products)
                    if (product.status === 'LISTO PARA ENTREGAR') {
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
                                <p className="">Hora de salida: {product.dateProcessed}</p>
                                <button className='btn-deliver' onClick={() => handleSubmit(product)}>Entregado</button>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default PedidosListos