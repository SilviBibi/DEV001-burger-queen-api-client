import React from "react";

const TableRow = ({ el, setDataToEdit, deleteData }) => {
    let { id, name, price, url, type, dateEntry } = el;
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td><img src={url} className='productImg'></img></td>
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