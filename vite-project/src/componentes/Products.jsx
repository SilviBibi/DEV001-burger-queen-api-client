import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import logo from '../../public/Img/logo-white.png';
import menuIcon from '../../public/Img/menu-icon.png';
import './Products.css';

const Products = () => {
  const [db, setDb] = useState(undefined);
  const [dataToEdit, setDataToEdit] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/products";

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
        console.log(res);
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

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el producto con el id '${id}'?`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`
      let options = {
        headers: { "content-type": "application/json" }
      };
      api.del(endpoint, options)
        .then((res) => {
          console.log(res);
          if (!res.err) {
            let newData = db.filter(el => el.id !== id);
            setDb(newData);
          } else {
            setError(res);
          };
        });
    } else {
      return;
    }
  };

  return (
    <section className="products">
      <div className="products-elements">
        <img src={logo} alt="bq-logo" className="bq-logo2" />
        <img src={menuIcon} alt="menu-icon" className="menu-icon" />
        <div className="btns-container">
          <button className="btn-products">Productos</button>
          <button className="btn-users">Usuarios</button>
        </div>
        <Form
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

        {db && <Table
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />}
      </div>
    </section>
  );
};

export default Products;