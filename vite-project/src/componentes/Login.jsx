import { useState } from "react";

const Login = () => {
    const[mail, mailUpdate]= useState('');
    const[password, passwordUpdate]= useState('');
    const [usersDb, usersDbUpdate] = useState(undefined);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if(validate()){
        // console.log('Procede')
        fetch("http://localhost:5000/users")
        .then((res) => {
            usersDbUpdate(res)
            if(usersDbUpdate.includes(mailUpdate)){
                console.log('Correo encontrado en bd.')
            } else {
                console.log('Correo no encontrado en bd.')
            }
        })
        }
    }

    const validate = () => {
        let result = true;
        if(mail === '' || mail === null){
            result = false;
            alert('Por favor ingrese un correo válido.')
        }
        if(password === '' || password === null){
            result = false;
            alert('Por favor ingrese una contraseña válida.')
        }
        return result;
    }
    return (
        <div className="row">
            <div className="container-login">
                <form onSubmit={ProceedLogin}>
                    <div>
                        <div>
                            <h2>INICIAR SESIÓN</h2>
                        </div>
                        <div>
                            <div>
                                <label>CORREO ELECTRÓNICO</label>
                                <input type="email" placeholder="INGRESA TU MAIL:" value={mail} onChange={e=>mailUpdate(e.target.value)} ></input>
                            </div>
                            {/* <div>
                                <img src={logo} alt="burger-queen-logo" />
                            </div> */}
                            <div>
                                <label>CONTRASEÑA</label> 
                                <input type="password" placeholder="INGRESA TU CONTRASEÑA:" value={password} onChange={e=>passwordUpdate(e.target.value)} ></input>
                            </div>
                            <div>
                                <button type="submit">INICIAR SESIÓN</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Login;