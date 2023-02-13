import React from 'react'
import './AddCardBtn.css'
import addToCart from './Prueba'


const AddCartBtn = (id) => {

  return (
    <button onClick={() => addToCart(id)} className='btnAdd'>+</button>
  )
}

export default AddCartBtn