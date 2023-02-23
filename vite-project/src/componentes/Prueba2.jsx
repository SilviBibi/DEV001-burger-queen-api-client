import React from 'react'
import './Cards.css'
import { BtnAddProduct } from './BtnAddProduct';


const Prueba2 = ({ product }) => {
    let qty= 1
    let { id, name, price, url, type} = product;

    if(product.type === 'desayuno' || product.type === 'Desayuno'){
        return (
            <div className='Cards'>
                <img src={url} className='productImg'></img>
                <h2 className='productName'>{name}</h2>
                <div className='productDetails'>
                    <p className='price'>$ {price}</p>
                    <BtnAddProduct
                     value = {price}  
                     product = {name} 
                     id = {id}
                     qty={qty}
                      />
                </div>
             </div>
        );
    }
}


export default Prueba2