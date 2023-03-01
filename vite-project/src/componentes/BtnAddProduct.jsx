import React from 'react'
import { useState, useContext } from 'react'
import Ordenes from './Ordenes'
import { Context } from './context/Context';

export const BtnAddProduct = ({ product, value, id, qty}) => {

  const {add, setAdd} = useContext(Context)  
 
      const handleChange = (product) => {
        if(add.find(item=> item.id === product.id)){
          const products = add.map(item =>
            item.id === product.id
            ? {...item, qty: item.qty +1}
            : item
            );
            return setAdd([...products])
        }
        setAdd(add => [...add, product]) 
        // console.log(add)
      }
        return (
            <button className ='btnAdd' onClick={() => handleChange({product, value, id, qty})}>+</button>
        )
}
 