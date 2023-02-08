import React from "react";
import { useState, useEffect } from "react";

const initialForm = {
    id: undefined,
    name: "",
    price: undefined,
    url: "",
    type: "",
    dateEntry: ""
};

const Form = ({createData, updateData, dataToEdit, setDataToEdit}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name ||!form.price || !form.type){
            alert("Datos incompletos");
            return;
        } 

        if(form.id === undefined){
            createData(form);
        } else {
            updateData(form)
        }
        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(undefined);
    };

    return (
        <div>
            <h3>{dataToEdit ? "Editar Productos":"Crear Productos"}</h3>
            <form onSubmit={handleSubmit}>
                <input type= "text" name="id" placeholder="Id del producto" onChange={handleChange} value={form.id}/>
                <input type= "text" name="name" placeholder="Nombre del producto" onChange={handleChange} value={form.name}/>
                <input type= "text" name="price" placeholder="Precio" onChange={handleChange} value={form.price}/>
                <input type= "text" name="image" placeholder="Foto del producto" onChange={handleChange} value={form.url}/>
                <input type= "text" name="type" placeholder="Tipo de producto" onChange={handleChange} value={form.type}/>
                <input type= "text" name="dateEntry" placeholder="Fecha de entrada" onChange={handleChange} value={form.dateEntry}/>
                <input type= "submit" value={dataToEdit ? "Editar":"Crear"}/>
                <input type= "reset" value= "Limpiar" onClick={handleReset}/>

            </form>
        </div>
    );
}

export default Form;