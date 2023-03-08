import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

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
            Swal.fire(
                'Datos incompletos',
                'Por favor completa todos los campos.',
                'error'
              )
            return;
        }

        if (form.id === undefined) {
            createData(form);
            Swal.fire({ 
                position: 'center',
                icon: 'success',
                title: 'El usuario ha sido creado con éxito.',
                showConfirmButton: false,
                timer: 1000
              })
        } else {
            Swal.fire({
                title: '¿Deseas guardar cambios?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, guardar!'
            }).then((result) => {
                if (result.isConfirmed) {
                    updateData(form)
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Los cambios se han guardado correctamente.',
                        showConfirmButton: false,
                        timer: 800
                    })
                }
            })
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