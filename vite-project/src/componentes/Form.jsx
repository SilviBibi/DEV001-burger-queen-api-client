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

const Form = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
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

        if (!form.name || !form.price || !form.type) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === undefined) {
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
        <>
            <h3 className="crear-productos">{dataToEdit ? "Editar Productos" : "Crear Productos"}</h3>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <input className="input-class" type="text" name="name" placeholder="Nombre del producto" onChange={handleChange} value={form.name} />
                    <input className="input-class" type="text" name="price" placeholder="Precio" onChange={handleChange} value={form.price} />
                    <input className="input-class" type="text" name="image" placeholder="URL de imagen" onChange={handleChange} value={form.url} />
                    <input className="input-class" type="text" name="type" placeholder="Tipo" onChange={handleChange} value={form.type} />
                    <input className="input-class" type="text" name="dateEntry" placeholder="Fecha de entrada" onChange={handleChange} value={form.dateEntry} />
                    <input className="btn-create" type="submit" value={dataToEdit ? "Editar" : "Crear"} />
                    <input className="btn-clean" type="reset" value="Limpiar" onClick={handleReset} />
                </form>
            </div>
        </>
    );
}

export default Form;