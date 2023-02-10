import React from "react";


const TableRowUsers = ({ el, setDataToEdit, deleteData }) => {
    let { id, name, dateOfBirth, email, roles } = el;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{dateOfBirth}</td>
                <td>{email}</td>
                <td>{roles}</td>
                <td>
                    <button className="btn-edit" onClick={() => setDataToEdit(el)}>Editar</button>
                    <button className="btn-delete" onClick={() => deleteData(id)}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

export default TableRowUsers;