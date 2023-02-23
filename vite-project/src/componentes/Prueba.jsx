import React from 'react'
import Prueba2 from './Prueba2'
import './Cards.css'
import Ordenes from './Ordenes'

const Prueba = ({ data }) => {
    return (
        <> 
            {data.length > 0 ? (
                data.map(product => ( 
                        <Prueba2
                            key={product.id}
                            product={product}
                            url={product.url}
                            name={product.name}
                            price={product.price}
                            qty={product.qty}
                            id={product.id}
                        />
                ))
            ) : (

                <p>Sin datos</p>

            )}
        </>
    )
}

export default Prueba