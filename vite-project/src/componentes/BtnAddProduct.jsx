import React from 'react'
import { useState } from 'react'

export const BtnAddProduct = ({ initialState, product, value}) => {
    const [add, setAdd] = useState(initialState)
      const handleChange = () => {
        setAdd(!add)
        if (add){
          let productInfo =[product, value]
          console.log(productInfo)
        }
      }
        return (
            <button className ='btnAdd' onClick={handleChange}>+</button>
        )
}
