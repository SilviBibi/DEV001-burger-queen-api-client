import React from 'react'
import PruebaComidas2 from './PruebaComidas2'
import './Cards.css'

const PruebaComidas = ({ data }) => {
    return (
        <>
            {data.length > 0 ? (
                data.map(product => (
                    <PruebaComidas2
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

export default PruebaComidas