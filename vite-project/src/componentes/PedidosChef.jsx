import React from "react";
import { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import PedidosChef2 from "./PedidosChef2";
import Loader from "./Loader";
import background from '../../public/Img/background-chefs2.png';
import logo from '../../public/Img/logo-white.png';
import logout from '../../public/Img/logout-logo.png';

const PedidosChef = () => {
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
            <img src={logout} alt="menu-icon" className="logout-icon" />

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