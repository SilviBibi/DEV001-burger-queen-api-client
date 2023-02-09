import React from "react";

const TableRow = ({ el, setDataToEdit, deleteData }) => {
    let { id, name, price, url, type, dateEntry } = el;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td><img src={url} className='productImg2'></img></td>
                <td>{type}</td>
                <td>{dateEntry}</td>
                <td>
                    <button className="btn-edit" onClick={() => setDataToEdit(el)}>Editar</button>
                    <button className="btn-delete" onClick={() => deleteData(id)}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

export default TableRow;