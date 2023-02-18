import React from 'react'
import PruebaBebidas2 from './PruebaBebidas2'
import './Cards.css'
import Ordenes from './Ordenes'

const PruebaBebidas = ({ data }) => {
    return (
        <> 
            {data.length > 0 ? (
                data.map(product => ( 
                        <PruebaBebidas2
                            key={product.id}
                            product={product}
                            url={product.url}
                            name={product.name}
                            price={product.price}
                            id={product.id}
                        />
                ))
            ) : (

                <p>Sin datos</p>

            )}
        </>
    )
}

export default PruebaBebidas