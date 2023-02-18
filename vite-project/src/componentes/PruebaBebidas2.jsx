import React from 'react'
import './Cards.css'
import { BtnAddProduct } from './BtnAddProduct';


const PruebaBebidas2 = ({ product }) => {
    let { id, name, price, url, type } = product;
    if(product.type === 'bebida' || product.type === 'Bebida'){
        return (
            <div className='Cards'>
                <img src={url} className='productImg'></img>
                <h2 className='productName'>{name}</h2>
                <div className='productDetails'>
                    <p className='price'>{price}</p>
                    <BtnAddProduct
                     value = {price}  
                     product = {name} 
                     id = {id}
                      />
                </div>
             </div>
        );
    }
}


export default PruebaBebidas2