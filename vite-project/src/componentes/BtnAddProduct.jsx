import React from 'react'
import { useState, useContext } from 'react'
import Ordenes from './Ordenes'
import { Context } from './context/Context';
import Swal from 'sweetalert2'

export const BtnAddProduct = ({ product, value, id, qty}) => {

  const {add, setAdd} = useContext(Context)  
 
      const handleChange = (product) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto agregado correctamente',
          showConfirmButton: false,
          timer: 800
        })
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
 