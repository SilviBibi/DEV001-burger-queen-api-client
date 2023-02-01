import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email : "",
        password : ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        const updateEmail = document.getElementById("email").value;
        const updatePassword = document.getElementById("password").value;
        console.log(updateEmail, updatePassword)
    }
    return (
        <div className="row">
            <div className="container-login">
                <form onSubmit={handleChange}>
                    <div>
                        <div>
                            <h2>INICIAR SESIÓN</h2>
                        </div>
                        <div>
                            <div>
                                <label>CORREO ELECTRÓNICO</label>
                                <input type="email" placeholder="INGRESA TU MAIL:" id="email" onChange={(e) => setData({...data, email: e.target.value})} ></input>
                            </div>
                            {/* <div>
                                <img src={logo} alt="burger-queen-logo" />
                            </div> */}
                            <div>
                                <label>CONTRASEÑA</label>
                                <input type="password" placeholder="INGRESA TU CONTRASEÑA:" id="password" onChange={(e) => setData({...data, password: e.target.value})} ></input>
                            </div>
                            <div>
                                <Link to={'/products'}>
                                    <button type="submit">INICIAR SESIÓN</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Login;