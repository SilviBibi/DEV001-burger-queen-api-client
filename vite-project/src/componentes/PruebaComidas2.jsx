import React from 'react'
import AddCartBtn from './AddCartBtn'
import './Cards.css'

const PruebaComidas2 = ({ product }) => {
    let { id, name, price, url, type } = product;
    if(product.type === 'comida' || product.type === 'Comida'){
        return (
            <div className='Cards'>
                <img src={url} className='productImg'></img>
                <h2 className='productName'>{name}</h2>
                <div className='productDetails'>
                    <p className='price'>{price}</p>
                    <AddCartBtn />
                </div>
        </div>
        );
    }
}


export default PruebaComidas2