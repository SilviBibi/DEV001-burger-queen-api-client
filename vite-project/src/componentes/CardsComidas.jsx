import React, { useEffect, useState } from "react";
import PruebaComidas from "./PruebaComidas";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import Message from "./Message";
import './Cards.css'


const CardsComidas = () => {
  
const [db, setDb] = useState(undefined);
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

return (
  <>
    {loading && <Loader />}
    {error && (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    )}

    {db && <PruebaComidas
      data={db}
    />}
  </>
);
};

export default CardsComidas