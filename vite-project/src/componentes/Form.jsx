import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
    const [form, setform] = useState({});
    const handleChange = (e) => {};
    const handleSubmit = (e) => {};
    const handleReset = (e) => {};
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