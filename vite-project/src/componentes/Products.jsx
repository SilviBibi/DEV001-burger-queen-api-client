import React, {useState} from "react";
import Form from "./Form";
import Table from "./Table";

const Products = () => {
    const [db, setDb] = useState ([])
    return (
        <>
            <h1> Productos </h1>
            <Form/>
            <Table data={db}/>
        </>
    );
}

export default Products;