import React from "react";

const TableRow = ({ el, setDataToEdit, deleteData }) => {
    let { id, name, price, image, type, dateEntry } = el;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{image}</td>
                <td>{type}</td>
                <td>{dateEntry}</td>
                <td>
                    <button onClick={() => setDataToEdit(el)}>Editar</button>
                    <button onClick={() => deleteData(id)}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

export default TableRow;