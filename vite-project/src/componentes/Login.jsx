import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../public/Img/logo-white.png';
import background from '../../public/Img/background-chefs2.png';
import './Login.css'
import Swal from 'sweetalert2'

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
            Swal.fire(
                'Datos incompletos',
                'Por favor completa todos los campos.',
                'error'
              )
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
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Has iniciado sesión con éxito',
                        showConfirmButton: false,
                        timer: 1000
                      })
                    if(resp.user.roles==="admin"){
                        navigate("/adminProducts")
                    }else  if(resp.user.roles==="waiter"){
                        navigate("/desayunos")
                    }else{
                         navigate("/pedidos-chef")
                    }
                }
            })
            .catch((err) => {
                Swal.fire(
                    'Datos incorrectos',
                    'Por favor verifica tus credenciales.',
                    'error'
                  )
            });

    };
    return (
        <section className="login" data-testid="login-1">
            <img src={background} alt="background-chefs" className="background-chefs" />
            <div className="container-login">
                <form onSubmit={handleChange}>
                    <div className="container-info">
                        <h2 className="title">INICIAR SESIÓN</h2>
                        <div className="div-line"></div>
                        <div className="email-info">
                            <label>CORREO ELECTRÓNICO</label>
                            <input className="login-placeholder" type="email" placeholder="INGRESA TU MAIL:" id="email" onChange={(e) => setData({ ...data, email: e.target.value })} ></input>
                        </div>
                        <picture className="logo-info">
                            <img src={logo} alt="burger-queen-logo" className="logo" />
                        </picture>
                        <div className="password-info">
                            <label>CONTRASEÑA</label>
                            <input className="login-placeholder" type="password" placeholder="INGRESA TU CONTRASEÑA:" id="password" onChange={(e) => setData({ ...data, password: e.target.value })} ></input>
                        </div>
                        <div>
                            <button type="submit" className="btn-login">INICIAR SESIÓN</button>
                        </div>
                    </div>
                </form>
            </div>

        </section>
    );
}

export default Login;