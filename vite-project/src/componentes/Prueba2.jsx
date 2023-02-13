import React from 'react'
import AddCartBtn from './AddCartBtn'
import './Cards.css'

const Prueba2 = ({ product }) => {
    let { id, name, price, url, type } = product;
    if(product.type === 'desayuno' || product.type === 'Desayuno'){
        return (
            <div className='Cards'>
                <img src={url} className='productImg'></img>
                <h2 className='productName'>{name}</h2>
                <div className='productDetails'>
                    <p className='price'>{price}</p>
                    <AddCartBtn onClick={() => addToCart(id)} />
                </div>
        </div>
        );
    }
}

//   return (
//     <div className='Cards'>
//         <img src= "https://i.postimg.cc/yNQSb701/cafe-con-leche.webp" className='productImg'></img>
//         <h2 className='productName'>Café con leche</h2>
//         <div className='productDetails'>
//             <p className='price'>$ 5</p>
//             <AddCartBtn/>
//         </div>
//     </div>
//   )
// }


export default Prueba2