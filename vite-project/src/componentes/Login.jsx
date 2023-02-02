import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../public/Img/logo-black.png'
import './Login.css'

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        const updateEmail = document.getElementById("email").value;
        const updatePassword = document.getElementById("password").value;
        // console.log(updateEmail, updatePassword)

        if (updateEmail === "" || updatePassword === "") {
            alert('Por favor llene todos los campos.')
            return
        }

        const url = "http://localhost:3004/login";
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(resp => resp.ok ? resp.json() : Promise.reject({ err: true }))
            .then(resp => {
                if (!resp.err) {
                    navigate("/products")
                }
            })
            .catch((err) => {
                alert('Datos incorrectos')
            });

    };
    return (
        <section className="Login">
            <div className="container-login">
                <form onSubmit={handleChange}>
                    <div>
                        <div>
                            <h2>INICIAR SESIÓN</h2>
                        </div>
                        <div>
                            <div>
                                <label>CORREO ELECTRÓNICO</label>
                                <input type="email" placeholder="INGRESA TU MAIL:" id="email" onChange={(e) => setData({ ...data, email: e.target.value })} ></input>
                            </div>
                            <picture>
                                <img src={logo} alt="burger-queen-logo" className="logo" />
                            </picture>
                            <div>
                                <label>CONTRASEÑA</label>
                                <input type="password" placeholder="INGRESA TU CONTRASEÑA:" id="password" onChange={(e) => setData({ ...data, password: e.target.value })} ></input>
                            </div>
                            <div>

                                <button type="submit">INICIAR SESIÓN</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Login;