import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormUsers from "./FormUsers";
import TableUsers from "./TableUsers";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import logo from '../../public/Img/logo-white.png';
import logoutImg from '../../public/Img/logout-logo.png';
import './AdminProducts.css';
import Swal from "sweetalert2";
 
const AdminUsers = () => {

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
  const [dataToEdit, setDataToEdit] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/users";

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

  const createData = (data) => {
    data.id = Date.now();
    // console.log(data)
    let options = {
      body: data,
      headers: { "content-type": "application/json" }
    };
    api.post(url, options)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          setDb([...db, res])
        } else {
          setError(res);
        };
      });

  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    // console.log(endpoint)

    let options = { 
      body: data,
      headers: { "content-type": "application/json" }
    };
    api.put(endpoint, options)
      .then((res) => {
        console.log(res);
        if (!res.err) {
          let newData = db.map(el => el.id === data.id ? data : el);
          setDb(newData);
        } else {
          setError(res);
        };
      });


  };

  const deleteData = (name, id) => { 
    Swal.fire({
      title: `¿Estás seguro de eliminar el usuario con el nombre '${name}'?`,
      icon: 'warning',
      showCancelButton: true, 
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        let endpoint = `${url}/${id}`
        let options = {
          headers: { "content-type": "application/json" }
        };
        api.del(endpoint, options)
          .then((res) => {
            // console.log(res);
            if (!res.err) {
              let newData = db.filter(el => el.id !== id);
              setDb(newData);
            } else {
              setError(res);
            };
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto eliminado correctamente',
            showConfirmButton: false,
            timer: 800
          })
      }
    })
  };

  return (
    <section className="products">
      <div className="products-elements">
        <img src={logo} alt="bq-logo" className="bq-logo2" />
        <Link to="/" className="nav-link" href="#" onClick={() => logout()}><img src={logoutImg} alt="menu-icon" className="logout-icon" /></Link>
        <div className="btns-containerUsers">
          <Link to="/AdminProducts" className="btn-products-off">Productos</Link>
          <Link to="/adminUsers" className="btn-users2">Usuarios</Link>
        </div>
        <FormUsers
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && <TableUsers
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />}
      </div>
    </section>
  );
};


export default AdminUsers;