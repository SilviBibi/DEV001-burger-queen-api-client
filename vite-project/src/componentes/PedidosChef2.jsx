import React from 'react'
import './PedidosChef.css'

const PedidosChef2 = ({data}) => {
    // console.log(data)
  return (
    <>
    {data.map(product => {
        console.log(product.products)
                return (
                    <div key={product.id * Math.random() * 50000} className="cardsPedidos">
                        <p className=''>{product.client}</p>
                        {product.products.map(order=> {
                            return (
                                <div key={product.id * Math.random() * 50000}>
                                <p>{order.qty} {order.product}</p>
                                </div>
                            )
                        })}
                        <p className="">{product.dateEntry}</p>
                    </div>
                )
            })}
    </>
  )
}

export default PedidosChef2