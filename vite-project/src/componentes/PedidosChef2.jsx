import React from 'react'
import './PedidosChef.css'

const PedidosChef2 = ({ data }) => {
    // console.log(data)

    let url = "http://localhost:5000/orders";

    const updateData = (product) => {
        let endpoint = `${url}/${product.id}`
        console.log(endpoint)
    
        // let options = {
        //   body: product,
        //   headers: { "content-type": "application/json" }
        // };
        // api.put(endpoint, options)
        //   .then((res) => {
        //     console.log(res);
        //     if (!res.err) {
        //       let newData = db.map(el => el.id === data.id ? data : el);
        //       setDb(newData);
        //     } else {
        //       setError(res);
        //     };
        //   });
    
      };


    return (
        <div className='container-cards-pedidos'>
            {data.map(product => {
                // console.log(product.products)
                if (product.status === 'EN PROCESO') {
                    return (
                        <div key={product.id * Math.random() * 50000} className="cardsPedidos">
                            <p className='product-client'>{product.client}</p>
                            {product.products.map(order => {
                                return (
                                    <div key={product.id * Math.random() * 50000}>
                                        <p>{order.qty} {order.product}</p>
                                    </div>
                                )
                            })} 
                            <p className="">Hora del pedido: {product.dateEntry}</p>
                            <button className='btn-deliver' onClick={() => updateData(product)}>Listo para entregar</button>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default PedidosChef2