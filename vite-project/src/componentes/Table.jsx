import React from "react";
import TableRow from "./TableRow";

const Table = ({data}) => {
    return (
        <div>
            <h3> Tabla de Productos </h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Imagen</th>
                        <th>Tipo</th>
                        <th>Fecha de entrada</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan = "6">Sin datos</td></tr>:data.map(el =>
                        <TableRow key={el.id} el={el}/>)}
                </tbody>

            </table>
        </div>
    );
}

export default Table;