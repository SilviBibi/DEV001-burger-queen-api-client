import React from "react";
import { useState, useEffect } from "react";

const initialForm = {
    id: null,
    name: "",
    price: null,
    image: "",
    type: "",
    dateEntry: ""
};

const Form = (createData, updateData, dateToEdit, setDataToEdit) => {
    const [form, setform] = useState({});

    const handleChange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.id || !form.name ||!form.price || !form.type){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form);
        } else {
            updateData(form)
        }
        handleReset();
    };

    const handleReset = (e) => {
        setform(initialForm)
    };

    return (
        <div>
            <h3> Crear Productos </h3>
            <form onSubmit={handleSubmit}>
                <input type= "text" name="id" placeholder="Id del producto" onChange={handleChange} value={form.id}/>
                <input type= "text" name="name" placeholder="Nombre del producto" onChange={handleChange} value={form.name}/>
                <input type= "text" name="price" placeholder="Precio" onChange={handleChange} value={form.price}/>
                <input type= "text" name="image" placeholder="Foto del producto" onChange={handleChange} value={form.image}/>
                <input type= "text" name="type" placeholder="Tipo de producto" onChange={handleChange} value={form.type}/>
                <input type= "text" name="dateEntry" placeholder="Fecha de entrada" onChange={handleChange} value={form.dateEntry}/>
                <input type= "submit" value= "Crear"/>
                <input type= "reset" value= "Limpiar" onClick={handleReset}/>

            </form>
        </div>
    );
}

export default Form;