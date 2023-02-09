import React from "react";
import TableRow from "./TableRow";

const Table = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div className="table2">
            <h3 className="table-title"> Tabla de Productos </h3>
            <table>
                <thead>
                    <tr className="table-head">
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Tipo</th>
                        <th>Fecha de entrada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data.length > 0 ? (
                        data.map(el => (
                            <TableRow
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

export default Table;