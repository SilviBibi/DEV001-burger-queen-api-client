import React from "react";
import TableRowUsers from "./TableRowUsers";


const TableUsers = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div className="table2">
            <h3 className="table-title"> Tabla de Usuarios </h3>
            <table>
                <thead>
                    <tr className="table-head">
                        <th>Nombre y apellido</th>
                        <th>Fecha de nacimiento</th>
                        <th>Correo electrónico</th>
                        <th>Rol de usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.length > 0 ? (
                        data.map(el => (
                            <TableRowUsers
                                key={el.id}
                                el={el}
                                setDataToEdit={setDataToEdit}
                                deleteData={deleteData}
                            />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Sin datos</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
}

export default TableUsers;