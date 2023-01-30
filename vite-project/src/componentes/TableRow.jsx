import React from "react";

const TableRow = ({ el }) => {
    return (
        <>
            <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.image}</td>
                <td>{el.type}</td>
                <td>{el.dateEntry}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

export default TableRow;