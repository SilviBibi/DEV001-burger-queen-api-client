import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";

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
    setDb([...db, data])
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el producto con el id '${id}'?`
    );
    if (isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
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
    </div>
  );
};

export default Products;