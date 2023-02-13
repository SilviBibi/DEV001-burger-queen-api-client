import React from "react";
import { useState, useEffect } from "react";

const initialForm = {
    id: undefined,
    name: "",
    dateOfBirth:"",
    email: "",
    password: "",
    roles: ""
};


const FormUsers = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
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
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.dateOfBirth || !form.email || !form.password || !form.roles) {
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
            <h3 className="crear-productos">{dataToEdit ? "Editar Usuarios" : "Crear Usuarios"}</h3>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                <input className="input-class" type="text" name="name" placeholder="Nombre y apellido" onChange={handleChange} value={form.name} />
                    <input className="input-class" type="text" name="dateOfBirth" placeholder="Fecha de nacimiento" onChange={handleChange} value={form.dateOfBirth} />
                    <input className="input-class" type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} value={form.email} />
                    <input className="input-class" type="password" name="password" placeholder="Contraseña" onChange={handleChange} value={form.password} />
                    <input className="input-class" type="text" name="roles" placeholder="Rol de usuario" onChange={handleChange} value={form.roles} />
                    <input className="btn-create" type="submit" value={dataToEdit ? "Editar" : "Crear"} />
                    <input className="btn-clean" type="reset" value="Limpiar" onClick={handleReset} />
                </form>
            </div>
        </>
    );
}

export default FormUsers;