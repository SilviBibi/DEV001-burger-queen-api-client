import React from 'react'
import { useState, useContext } from 'react'
import Ordenes from './Ordenes'
import { Context } from './context/Context';

export const BtnAddProduct = ({ product, value, id}) => {

  const {add, setAdd} = useContext(Context)
  // console.log(add)

      const handleChange = (product) => {
        setAdd(add => [...add, product])
       
      }
        return (
            <button className ='btnAdd' onClick={() => handleChange({product, value, id})}>+</button>
        )
}
 