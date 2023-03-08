import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import PedidosChef2 from "./PedidosChef2";
import Loader from "./Loader";
import background from '../../public/Img/background-chefs2.png';
import logo from '../../public/Img/logo-white.png';
import logoutImg from '../../public/Img/logout-logo.png';
import { Link, useNavigate } from "react-router-dom";

const PedidosChef = () => {

    const navigate = useNavigate();
    let userId = localStorage.getItem("currentUserId");

    useEffect(() => {
        if (!userId) {
            navigate("/") 
        } else {
            console.log('Ingreso exitoso.')
        }

    });

    const logout = () => {
        localStorage.clear();
    }

    const [db, setDb] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

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

    return (
        <>
            <img src={background} alt="background-coffe" className="background-coffe" />
            <img src={logo} alt="bq-logo" className="bq-logo2" />
            <Link to="/" className="nav-link" href="#" onClick={() => logout()} ><img src={logoutImg} alt="menu-icon" className="logout-icon" /></Link>

            <div className="btns-container">
                <p className="orders-title">Pedidos en proceso</p>
            </div>

            {loading && <Loader />}
            {error && (
                <Message
                    msg={`Error ${error.status}: ${error.statusText}`}
                    bgColor="#dc3545"
                />
            )}
            {db && <PedidosChef2
                data={db}
            />}

        </>
    )
};
export default PedidosChef;