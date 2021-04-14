import React from 'react'

function CartProductComponent({product, removeFunction}) {

    

    return (
        <div className="cartProductComponent">
            <img src={product.image}></img>
            <h3>{product.name}</h3>
            <p>{product.number}</p>
            <button onClick={() => {removeFunction()}}>X</button>
        </div>
    )
}

export default CartProductComponent
