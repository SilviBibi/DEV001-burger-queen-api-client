import React from "react";
import Swal from "sweetalert2";


const TableRow = ({ el, setDataToEdit, deleteData }) => {
    let { id, name, price, url, type, dateEntry } = el;

    const toEdit = (el) => {
        setDataToEdit(el)
        Swal.fire(
            'Ya puedes editar',
            'En la parte superior encontrará el formulario para editar el producto.',
            'success',
        )
    }

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td><img src={url} className='productImg2'></img></td> 
                <td>{type}</td>
                <td>{dateEntry}</td>
                <td>
                    <button className="btn-edit" onClick={() => toEdit(el)}>Editar</button>
                    <button className="btn-delete" onClick={() => deleteData(id, name)}>Eliminar</button>
                </td>
            </tr>
        </>
    );
}

export default TableRow;