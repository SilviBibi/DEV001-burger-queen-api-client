import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
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
    <>
      <h1> Productos </h1>
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
    </>
  );
};

export default Products;