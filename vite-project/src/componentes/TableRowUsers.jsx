import React from "react";
import Swal from "sweetalert2";


const TableRowUsers = ({ el, setDataToEdit, deleteData }) => {
    let { id, name, dateOfBirth, email, roles } = el;

    const toEdit = (el) => {
        setDataToEdit(el)
        Swal.fire(
            'Ya puedes editar',
            'En la parte superior encontrará el formulario para editar el usuario.',
            'success',
        )
    }

    return (
        <>
            <tr> 
                <td>{name}</td>
                <td>{dateOfBirth}</td>
                <td>{email}</td>
                <td>{roles}</td>
                <td>
                    <button className="btn-edit" onClick={() => toEdit(el)}>Editar</button>
                    <button className="btn-delete" onClick={() => deleteData(name, id)}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

export default TableRowUsers;